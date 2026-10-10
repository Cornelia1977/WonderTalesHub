// Every link that leaves the site, in one place.
//
// The store links are empty until the app is published: while they are, the
// store badges scroll to the download section, which explains how to get
// the app as a tester. Fill them in and every badge on the site links out.
export const APP_STORE_URL = ''
export const PLAY_STORE_URL = ''

// Social profiles. An empty one is not shown at all — a dead icon is worse
// than no icon.
export const SOCIAL_LINKS = {
  twitter: '',
  instagram: 'https://instagram.com/wondertales_hub',
  // A share link until the page has a username; then facebook.com/<username>.
  facebook: 'https://www.facebook.com/share/19SnQY9y9q/',
  tiktok: '',
  youtube: '',
}

export const SUPPORT_EMAIL = 'contact@wondertaleshub.com'
export const SITE_URL = 'https://www.wondertaleshub.com'

/** Where a "get the app" call to action goes: the store when it exists,
 *  the download section otherwise. */
export const GET_THE_APP_HREF = APP_STORE_URL || PLAY_STORE_URL || '/#download'
export const APP_IS_IN_STORES = Boolean(APP_STORE_URL || PLAY_STORE_URL)

/** A store link that carries the visitor's utm tags on to the app: Google
 *  Play hands the app its `referrer` at install (the app's install
 *  referrer), so a family that came from an Instagram post shows under
 *  Instagram on the admin's Revenue page. Apple has no equivalent, and a
 *  link without tags is returned as it is. */
export function storeHref(url: string, utm: Record<string, string>): string {
  if (!/^https:\/\/play\.google\.com\//.test(url)) return url
  const tags = Object.entries(utm).filter(([key]) => key.startsWith('utm_'))
  if (tags.length === 0) return url
  const referrer = tags.map(([key, value]) => `${key}=${value}`).join('&')
  const link = new URL(url)
  link.searchParams.set('referrer', referrer)
  return link.toString()
}
