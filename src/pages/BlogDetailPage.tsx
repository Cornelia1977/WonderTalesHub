import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useBlogStore } from '../cotexts/blogStore'
import BlogCard from '../components/BlogCard'
import StarrySky from '../components/landing/StarrySky'
import StoreBadges from '../components/StoreBadges'
import { categoryLabel, readingMinutes } from '../utils/blogMeta'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const { activeBlog, blogs, fetchBlogBySlug, fetchBlogs, loading } = useBlogStore()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (slug) {
      fetchBlogBySlug(slug)
    }
    // For "More to read" at the end.
    if (blogs.length === 0) fetchBlogs()
  }, [slug, fetchBlogBySlug, fetchBlogs, blogs.length])

  // Dynamic SEO Injection
  useEffect(() => {
    if (activeBlog) {
      // Set Document Title
      document.title = activeBlog.meta_title || activeBlog.title

      // Set Meta Description
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', activeBlog.meta_description || activeBlog.excerpt || '')

      // Set Meta Keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', activeBlog.meta_keywords || '')
    }

    return () => {
      // Restore default title on unmount
      document.title = 'Wonder Tales Hub'
    }
  }, [activeBlog])

  if (loading) {
    return (
      <div className="min-h-[85vh] bg-navy-950 px-6 py-32 text-center flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-4 text-slate-400 font-sans">Unveiling story details...</p>
      </div>
    )
  }

  if (!activeBlog) {
    return (
      <div className="min-h-[85vh] bg-navy-950 px-6 py-32 text-center text-slate-300 lg:px-8 relative overflow-hidden flex flex-col justify-center items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <h2 className="font-serif text-3xl text-white">Blog not found</h2>
        <p className="mt-4 text-sm text-slate-400 font-sans">The story you're looking for is not available yet.</p>
        <Link to="/blogs" className="mt-6 inline-flex items-center gap-2 text-gold hover:underline font-sans text-sm">
          &larr; Back to all blogs
        </Link>
      </div>
    )
  }

  const renderTitle = (title: string) => (
    <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-[56px]">{title}</h1>
  )

  // Custom text content renderer to turn plain text with lists/headings into beautiful HTML structure
  const renderContent = (content: string) => {
    if (!content) return null

    // If it's already HTML (e.g. contains paragraph tags), render it as HTML
    if (content.includes('<p>') || content.includes('<br>') || content.includes('<ul>')) {
      return (
        <div
          className="prose prose-invert max-w-none space-y-6 text-[17px] leading-relaxed text-white/80 sm:text-lg [&_h2]:font-serif [&_h2]:text-gold [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-normal [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-white [&_h3]:text-xl [&_ul]:list-none [&_ul]:pl-0 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:my-4 [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-gold"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )
    }

    // Otherwise, parse plain text block-by-block
    const blocks = content.split('\n\n')
    return (
      <div className="space-y-6 text-[17px] leading-relaxed text-white/80 sm:text-lg">
        {blocks.map((block, idx) => {
          const trimmed = block.trim()
          if (!trimmed) return null

          // Headings like "1. Set the Stage", "2. Master Your Delivery" or "The Ultimate Benefit"
          if (/^\d+\.\s+/.test(trimmed) || trimmed === 'The Ultimate Benefit') {
            return (
              <h2 key={idx} className="mt-12 mb-5 font-serif text-2xl text-gold sm:text-3xl">
                {trimmed}
              </h2>
            )
          }

          // Bullet list block
          if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
            const items = trimmed.split('\n').map(item => item.replace(/^[•\-*]\s*/, '').trim())
            return (
              <ul key={idx} className="space-y-4 my-6 list-none pl-0">
                {items.map((item, i) => {
                  const boldMatch = item.match(/^\*\*(.*?)\*\*(.*)/) || item.match(/^(.*?):(.*)/)
                  if (boldMatch) {
                    const titleText = boldMatch[1].trim()
                    const descText = boldMatch[2].trim()
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-gold text-lg leading-none mt-1.5 select-none">•</span>
                        <span>
                          <strong className="text-white font-semibold">{titleText}: </strong>
                          <span className="text-white/80">{descText}</span>
                        </span>
                      </li>
                    )
                  }
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold text-lg leading-none mt-1.5 select-none">•</span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  )
                })}
              </ul>
            )
          }

          // Normal Paragraph with bold inline text conversion
          return (
            <p key={idx} className="leading-relaxed">
              {trimmed.split('**').map((part, i) => {
                if (i % 2 === 1) {
                  return <strong key={i} className="text-white font-semibold">{part}</strong>
                }
                return part
              })}
            </p>
          )
        })}
      </div>
    )
  }

  const others = blogs.filter((b) => b.slug !== activeBlog.slug).slice(0, 3)

  return (
    <div className="relative isolate overflow-hidden pt-32 pb-24 animate-fade-in-up">
      <StarrySky />
      <div className="mx-auto w-11/12 max-w-360">
        <Link
          to="/blogs"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-gold"
        >
          <span aria-hidden="true">←</span> Notes for parents
        </Link>

        <header className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
            <span>{categoryLabel(activeBlog)}</span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span className="font-medium normal-case tracking-normal text-white/60">{readingMinutes(activeBlog)} min read</span>
            {activeBlog.date && (
              <>
                <span className="text-white/30" aria-hidden="true">·</span>
                <span className="font-medium normal-case tracking-normal text-white/60">{activeBlog.date}</span>
              </>
            )}
          </div>
          <div className="mt-5">{renderTitle(activeBlog.title)}</div>
          {activeBlog.excerpt && !activeBlog.excerpt.endsWith('...') && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{activeBlog.excerpt}</p>
          )}
        </header>

        {activeBlog.image && (
          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-gold/40 shadow-[0_0_40px_rgba(232,160,32,0.18)]">
            <img src={activeBlog.image} alt="" className="aspect-[16/9] w-full object-cover" />
          </div>
        )}

        <article className="mx-auto mt-14 max-w-3xl">
          {renderContent(activeBlog.content || '')}
        </article>

        {/* The point of the blog: a story tonight. */}
        <aside className="mx-auto mt-20 max-w-3xl rounded-3xl border border-gold/30 bg-white/5 p-8 text-center backdrop-blur-md sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Tonight</p>
          <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">Try a story where your child is the hero</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Pick a theme and a voice, and a new bedtime story is written and read in minutes. The first one is free.
          </p>
          <div className="mt-6 flex justify-center">
            <StoreBadges className="h-11" />
          </div>
        </aside>

        {others.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-2xl text-white sm:text-3xl">More to read</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
