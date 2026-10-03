import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { setSeo } from '../seo'

export default function NotFoundPage() {
  useEffect(() => {
    setSeo({ title: 'Page not found', description: 'That page does not exist.', path: '/404', noindex: true })
  }, [])
  return (
    <section className="px-6 pt-40 pb-32 lg:px-8 text-center">
      <p className="text-xs font-semibold text-gold tracking-widest uppercase">That page has wandered off</p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-white">Nothing here tonight</h1>
      <p className="mt-4 text-white/70">The page you were looking for does not exist, or has moved.</p>
      <Link to="/" className="mt-8 inline-block rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy-950 hover:opacity-90 transition">
        Back to the home page
      </Link>
    </section>
  )
}
