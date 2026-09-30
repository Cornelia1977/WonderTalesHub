import footerImg from '../../assets/footerimg.webp'
import StoreBadges from '../StoreBadges'
import { APP_IS_IN_STORES, SUPPORT_EMAIL } from '../../config/links'

export default function CTA() {
  return (
    <section id="download" className="relative w-full overflow-hidden min-h-[460px] flex items-center bg-linear-to-br from-navy-950/90 via-navy-700/80 to-navy-900/90 border-t border-white/10">

      {/* Background Image positioned to show the house on the right, full-bleed */}
      <img
        src={footerImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right z-0 pointer-events-none"
      />

      {/* Beautiful Gradient overlay to darken the left side and fade to show the house on the right */}
      <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/60 to-transparent z-0" />

      {/* Content Wrapper aligned to the standard page layout grid */}
      <div className="relative z-10 mx-auto w-11/12 max-w-360 px-6 py-20 lg:px-8">
        <div className="max-w-xl text-left space-y-4">
          <p className="text-xs font-semibold text-gold tracking-widest uppercase">Ready to Begin?</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15]">
            Start Your Child’s Magical Journey Tonight
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-normal max-w-md leading-relaxed">
            {APP_IS_IN_STORES
              ? 'Download the app and create unforgettable bedtime memories.'
              : 'Wonder Tales Hub is in family testing before its App Store and Google Play release. Want to try it tonight? Email us and we will send you an invitation.'}
          </p>
          <div className="pt-4 flex flex-col items-start gap-4">
            {APP_IS_IN_STORES ? (
              <StoreBadges className="h-10 md:h-12" />
            ) : (
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Wonder Tales Hub: invitation to test the app')}`}
                className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy-950 hover:opacity-90 transition"
              >
                Ask for an invitation
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
