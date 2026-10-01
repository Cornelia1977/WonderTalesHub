import { Link } from 'react-router-dom'
import type { BlogPost } from '../types/blog'
import { categoryLabel, readingMinutes, teaser } from '../utils/blogMeta'

interface BlogCardProps {
  post: BlogPost
  /** The newest post, shown large at the top of the list. */
  featured?: boolean
}

/** A post the way the app shows a story: its picture in a gold-ringed
 *  frame, what it is about, and how long it takes. */
export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const href = `/blog/${post.slug}`
  const meta = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
      <span>{categoryLabel(post)}</span>
      <span className="text-white/30" aria-hidden="true">·</span>
      <span className="text-white/60 normal-case tracking-normal font-medium">{readingMinutes(post)} min read</span>
      {post.date && (
        <>
          <span className="text-white/30" aria-hidden="true">·</span>
          <span className="text-white/60 normal-case tracking-normal font-medium">{post.date}</span>
        </>
      )}
    </div>
  )

  if (featured) {
    return (
      <article className="group grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors duration-300 hover:border-gold/40 lg:grid-cols-[1.15fr_1fr] lg:p-5">
        <Link to={href} className="block overflow-hidden rounded-2xl border border-gold/40 shadow-[0_0_30px_rgba(232,160,32,0.18)]">
          <img src={post.image} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        </Link>
        <div className="flex flex-col justify-center gap-4 px-2 pb-2 lg:px-4">
          {meta}
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
            <Link to={href} className="transition-colors hover:text-gold">{post.title}</Link>
          </h2>
          <p className="text-base leading-relaxed text-white/70">{teaser(post, 220)}</p>
          <Link to={href} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-navy-950">
            Read the article <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-colors duration-300 hover:border-gold/40">
      <Link to={href} className="block overflow-hidden rounded-2xl border border-gold/30 shadow-[0_0_20px_rgba(232,160,32,0.12)]">
        <img src={post.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col gap-3 px-2 pt-5 pb-3">
        {meta}
        <h2 className="font-serif text-xl leading-snug text-white sm:text-2xl">
          <Link to={href} className="transition-colors hover:text-gold">{post.title}</Link>
        </h2>
        <p className="text-sm leading-relaxed text-white/65">{teaser(post)}</p>
        <Link to={href} className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-gold transition hover:gap-2.5">
          Read <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
