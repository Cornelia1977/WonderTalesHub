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
  instagram: '',
  facebook: '',
}

export const SUPPORT_EMAIL = 'contact@wondertaleshub.com'
export const SITE_URL = 'https://www.wondertaleshub.com'

/** Where a "get the app" call to action goes: the store when it exists,
 *  the download section otherwise. */
export const GET_THE_APP_HREF = APP_STORE_URL || PLAY_STORE_URL || '/#download'
export const APP_IS_IN_STORES = Boolean(APP_STORE_URL || PLAY_STORE_URL)
