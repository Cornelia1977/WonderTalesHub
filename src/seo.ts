import { SOCIAL_LINKS } from './config/links'

/** What a search engine or a shared link sees for the page on screen.
 *
 *  The site is one HTML file for every address, so without this every page
 *  told crawlers it was the home page: same title, same description, and a
 *  canonical link pointing at "/". Each page now sets its own as it opens,
 *  and the social tags and structured data follow. */

const SITE = 'https://www.wondertaleshub.com'
const SITE_NAME = 'Wonder Tales Hub'
const DEFAULT_IMAGE = `${SITE}/og-image.png`

export type Seo = {
  /** The page's own title; the site name is added after it. */
  title: string
  description: string
  /** The page path, "/blogs". Used for the canonical link and og:url. */
  path: string
  image?: string
  type?: 'website' | 'article'
  /** Keep the page out of search results (the 404 page). */
  noindex?: boolean
  /** Structured data objects, written as JSON-LD. */
  jsonLd?: object[]
}

function meta(selector: string, attrs: Record<string, string>, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function link(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function setSeo(seo: Seo) {
  const fullTitle = seo.title.includes(SITE_NAME) ? seo.title : `${seo.title} — ${SITE_NAME}`
  const url = SITE + (seo.path.startsWith('/') ? seo.path : `/${seo.path}`)
  const image = seo.image && seo.image.startsWith('http') ? seo.image : DEFAULT_IMAGE

  document.title = fullTitle
  meta('meta[name="title"]', { name: 'title' }, fullTitle)
  meta('meta[name="description"]', { name: 'description' }, seo.description)
  meta('meta[name="robots"]', { name: 'robots' }, seo.noindex ? 'noindex, nofollow' : 'index, follow')
  link('canonical', url)

  meta('meta[property="og:type"]', { property: 'og:type' }, seo.type ?? 'website')
  meta('meta[property="og:url"]', { property: 'og:url' }, url)
  meta('meta[property="og:title"]', { property: 'og:title' }, fullTitle)
  meta('meta[property="og:description"]', { property: 'og:description' }, seo.description)
  meta('meta[property="og:image"]', { property: 'og:image' }, image)
  meta('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME)
  meta('meta[property="twitter:card"]', { property: 'twitter:card' }, 'summary_large_image')
  meta('meta[property="twitter:url"]', { property: 'twitter:url' }, url)
  meta('meta[property="twitter:title"]', { property: 'twitter:title' }, fullTitle)
  meta('meta[property="twitter:description"]', { property: 'twitter:description' }, seo.description)
  meta('meta[property="twitter:image"]', { property: 'twitter:image' }, image)

  document.head.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove())
  for (const data of seo.jsonLd ?? []) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-jsonld', '')
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }
}

/** The organisation and the app, for the home page. */
export const SITE_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE,
    logo: `${SITE}/icon-512.png`,
    email: 'contact@wondertaleshub.com',
    // The social profiles, so search engines tie them to the site.
    sameAs: Object.values(SOCIAL_LINKS).filter(Boolean),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE_NAME,
    operatingSystem: 'iOS, Android',
    applicationCategory: 'EntertainmentApplication',
    description:
      'Personalized bedtime stories where your child is the hero, written for their age and narrated by a storyteller or in a family voice, in ten languages.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'One free story, then plans from 7.99 a month.' },
    url: SITE,
  },
]

export function faqJsonLd(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}
