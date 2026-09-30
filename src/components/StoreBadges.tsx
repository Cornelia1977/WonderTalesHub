import storeButtons from '../assets/google and apple playstore.svg'
import { GET_THE_APP_HREF, APP_IS_IN_STORES } from '../config/links'

/** The App Store and Google Play badges. Until the app is in the stores
 *  they lead to the download section, which says how to get it today. */
export default function StoreBadges({ className = 'h-12' }: { className?: string }) {
  return (
    <a
      href={GET_THE_APP_HREF}
      target={APP_IS_IN_STORES ? '_blank' : undefined}
      rel={APP_IS_IN_STORES ? 'noreferrer' : undefined}
      aria-label={APP_IS_IN_STORES ? 'Get the app' : 'How to get the app'}
      className="inline-block hover:opacity-90 transition"
    >
      <img src={storeButtons} alt="Download on the App Store and Google Play" className={`${className} object-contain`} />
    </a>
  )
}
