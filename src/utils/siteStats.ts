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

async function send(kind: 'view' | 'store_click', path: string) {
  if (typeof window === 'undefined' || optedOut()) return
  const body: Record<string, string> = { kind, path, country: await getCountry() }
  if (kind === 'view' && firstView) {
    // Where the visitor came from, once: the server keeps the site name only.
    body.referrer = document.referrer
    body.url = window.location.href
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
