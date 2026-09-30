import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** The frame for the privacy policy, the terms and the account-deletion
 *  page: a readable column, the site's colours, a dated heading. */
export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  updated?: string
  intro?: ReactNode
  children: ReactNode
}) {
  useEffect(() => {
    const previous = document.title
    document.title = `${title} — Wonder Tales Hub`
    window.scrollTo(0, 0)
    return () => {
      document.title = previous
    }
  }, [title])

  return (
    <section className="px-6 pt-36 pb-24 lg:px-8">
      <article className="legal mx-auto max-w-3xl text-white/85 leading-relaxed">
        <p className="text-xs font-semibold text-gold tracking-widest uppercase">Wonder Tales Hub</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-white leading-tight">{title}</h1>
        {updated && <p className="mt-3 text-sm text-white/50">Last updated: {updated}</p>}
        {intro && <div className="mt-6 text-base">{intro}</div>}
        <div className="mt-10 space-y-8 text-[15px]">{children}</div>
        <p className="mt-14 text-sm text-white/50">
          <Link to="/" className="underline hover:text-gold transition">Back to the home page</Link>
        </p>
      </article>
    </section>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-white mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}
