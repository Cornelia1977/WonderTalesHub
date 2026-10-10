import { getApiBase } from '../config/api'

/**
 * The site's own visit counter, without cookies (backend:
 * apps/payments/site_stats.py, shown on /admin/kpis/).
 *
 * One small message per page view and per click on the store badges, with
 * the page, the site that linked here (first page only) and the country
 * Vercel already gives the pricing section. Nothing is stored in the
 * browser. The server keeps no IP address and no browser details: it tells
 * visitors apart for one day only. Browsers that ask not to be tracked
 * (Do Not Track, Global Privacy Control) send nothing.
 */

let countryPromise: Promise<string> | null = null

/** The visitor's country from Vercel (api/country.ts), asked once per visit. */
export function getCountry(): Promise<string> {
  if (!countryPromise) {
    countryPromise = fetch('/api/country')
      .then((r) => (r.ok ? r.json() : {}))
      .then((d: { country?: string }) => (d.country && /^[A-Z]{2}$/.test(d.country) ? d.country : ''))
      .catch(() => '')
  }
  return countryPromise
}

function optedOut(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean }
  return nav.doNotTrack === '1' || nav.globalPrivacyControl === true
}

let firstView = true

const LANDING_KEY = 'landing'

/** The page the visitor arrived on and the site that sent them, kept for
 *  the visit (sessionStorage, gone when the tab closes): a store click
 *  later in the visit is credited to that source too, and the Google Play
 *  badge passes its utm tags on to the app (config/links.ts storeHref). */
export function landing(): { url: string; referrer: string } {
  try {
    const kept = sessionStorage.getItem(LANDING_KEY)
    if (kept) return JSON.parse(kept)
  } catch {
    // Private windows may refuse storage; the current page is then the landing.
  }
  const here = { url: window.location.href, referrer: document.referrer }
  try {
    sessionStorage.setItem(LANDING_KEY, JSON.stringify(here))
  } catch {
    // Same: nothing kept, nothing lost but a later click's source.
  }
  return here
}

/** The utm_* tags the visitor arrived with, from the landing page's address. */
export function landingUtm(): Record<string, string> {
  const tags: Record<string, string> = {}
  try {
    new URL(landing().url).searchParams.forEach((value, key) => {
      if (/^utm_[a-z]+$/.test(key) && value) tags[key] = value.slice(0, 100)
    })
  } catch {
    // An address that does not parse carries no tags.
  }
  return tags
}

async function send(kind: 'view' | 'store_click', path: string) {
  if (typeof window === 'undefined' || optedOut()) return
  const body: Record<string, string> = { kind, path, country: await getCountry() }
  if ((kind === 'view' && firstView) || kind === 'store_click') {
    // Where the visitor came from: the server keeps the site name (or the
    // utm_source) only. Once per visit for views; on every store click, so
    // the click is credited to the source that brought the visitor.
    const from = landing()
    body.referrer = from.referrer
    body.url = from.url
    firstView = false
  }
  const url = `${getApiBase()}/v1/site/event/`
  const data = JSON.stringify(body)
  try {
    // text/plain needs no CORS preflight, and a beacon survives leaving the page.
    if (navigator.sendBeacon?.(url, new Blob([data], { type: 'text/plain' }))) return
    void fetch(url, { method: 'POST', body: data, headers: { 'content-type': 'text/plain' }, keepalive: true, credentials: 'omit' })
  } catch {
    // Counting must never get in the visitor's way.
  }
}

export const trackView = (path: string) => void send('view', path)
export const trackStoreClick = () => void send('store_click', window.location.pathname)
