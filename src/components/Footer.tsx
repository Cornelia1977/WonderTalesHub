import logoIcon from '../assets/logo.png'
import fbIcon from '../assets/Facebook.svg'
import igIcon from '../assets/Instagram.svg'
import twIcon from '../assets/Twitter.svg'
import { Link } from 'react-router-dom'
import { SOCIAL_LINKS, SUPPORT_EMAIL } from '../config/links'

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-navy-950/90 via-navy-700/80 to-navy-900/90 px-6 pt-24 pb-8 lg:px-8">
      <div className="mx-auto w-11/12 max-w-360">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="flex items-center justify-center md:justify-start">
            <img src={logoIcon} alt="Wonder Tales Hub" className="h-32 object-contain" />
          </div>
          <div className="space-y-3 text-[14px] text-white/95 font-normal text-center md:text-right pb-4">
            <p>Contact: <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-gold transition">{SUPPORT_EMAIL}</a></p>
            <p>Support: <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-gold transition">{SUPPORT_EMAIL}</a></p>
            <p className="pt-2 space-x-4">
              <Link to="/privacy" className="underline hover:text-gold transition">Privacy Policy</Link>
              <Link to="/terms" className="underline hover:text-gold transition">Terms of Service</Link>
              <Link to="/delete-account" className="underline hover:text-gold transition">Delete your account</Link>
            </p>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-[13px] text-white/50 font-normal space-y-1 text-center sm:text-left">
            <p>© 2026 NEXUM Ventures FZ-LLC. Wonder Tales Hub is a NEXUM Ventures product. All rights reserved.</p>
            <p className="text-white/40 text-[12px]">Wonder Tales Hub is built for parents. Children do not create accounts, and we collect only what a parent chooses to add — see our <Link to="/privacy" className="underline hover:text-gold transition">Privacy Policy</Link>.</p>
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.twitter && (
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="transition hover:opacity-80">
                <img src={twIcon} alt="Twitter" className="h-8 w-8" />
              </a>
            )}
            {SOCIAL_LINKS.instagram && (
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="transition hover:opacity-80">
                <img src={igIcon} alt="Instagram" className="h-8 w-8" />
              </a>
            )}
            {SOCIAL_LINKS.facebook && (
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="transition hover:opacity-80">
                <img src={fbIcon} alt="Facebook" className="h-8 w-8" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
