import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoIcon from '../assets/logo.png'
import { APP_IS_IN_STORES, GET_THE_APP_HREF } from '../config/links'

const CTA_LABEL = APP_IS_IN_STORES ? 'Get the app' : 'Early access'

const navItems = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Voices', href: '/#voice' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blogs', href: '/blogs', highlight: false },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="mx-auto flex w-11/12 max-w-360 items-center justify-between px-2 py-5 sm:px-6 sm:py-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
          <img src={logoIcon} alt="" className="h-8 sm:h-10 object-contain" />
          <span className="text-base sm:text-xl font-serif tracking-wide whitespace-nowrap">
            <span className="text-gold">Wonder Tales</span> <span className="text-white">Hub</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-10 md:flex ml-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[13px] font-normal transition-colors text-white hover:text-gold`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={GET_THE_APP_HREF}
            className="whitespace-nowrap rounded-full bg-linear-to-b from-[#E89C30] to-[#FFDBA7] px-3 py-1.5 sm:px-6 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold text-navy-950 shadow-[0_0_18px_rgba(232,160,32,0.35)] transition hover:opacity-90"
          >
            {CTA_LABEL}
          </a>
          <button
            className="md:hidden p-1 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-linear-to-br from-navy-950/90 via-navy-700/80 to-navy-900/90/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-white/10 px-6 py-4 flex flex-col shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-white hover:text-gold block py-3 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={GET_THE_APP_HREF}
            className="text-base font-medium text-gold block py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {CTA_LABEL}
          </a>
        </div>
      )}
    </header>
  )
}
