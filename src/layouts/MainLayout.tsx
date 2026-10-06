import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { trackView } from '../utils/siteStats'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MagicCursor from '../components/MagicCursor'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => trackView(pathname), [pathname])

  return (
    <div className="min-h-screen bg-linear-to-br from-navy-950/90 via-navy-700/80 to-navy-900/90 text-slate-200">
      <MagicCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
