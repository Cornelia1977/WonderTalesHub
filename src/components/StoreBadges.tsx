import storeButtons from '../assets/google and apple playstore.svg'
import { GET_THE_APP_HREF, APP_IS_IN_STORES } from '../config/links'
import { trackStoreClick } from '../utils/siteStats'

/** The App Store and Google Play badges. Until the app is in the stores
 *  they say so, and lead to the download section, which says how to get
 *  it today. */
export default function StoreBadges({ className = 'h-12' }: { className?: string }) {
  return (
    <div className="inline-flex flex-col items-start gap-2">
      {!APP_IS_IN_STORES && (
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">Coming soon to</span>
      )}
      <a
        href={GET_THE_APP_HREF}
        onClick={trackStoreClick}
        target={APP_IS_IN_STORES ? '_blank' : undefined}
        rel={APP_IS_IN_STORES ? 'noreferrer' : undefined}
        aria-label={APP_IS_IN_STORES ? 'Get the app' : 'How to get the app before its release'}
        className={`inline-block transition hover:opacity-90 ${APP_IS_IN_STORES ? '' : 'opacity-80'}`}
      >
        <img src={storeButtons} alt="App Store and Google Play" className={`${className} object-contain`} />
      </a>
    </div>
  )
}
