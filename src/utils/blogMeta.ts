import type { BlogPost } from '../types/blog'

/** Minutes a parent needs for a post, at an unhurried reading pace. */
export function readingMinutes(post: BlogPost): number {
  const text = (post.content || '').replace(/<[^>]+>/g, ' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

/** The first sentence or two of a post, for a card. */
export function teaser(post: BlogPost, chars = 150): string {
  const source = (post.excerpt || post.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  if (source.length <= chars) return source
  const cut = source.slice(0, chars)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

/** Category labels as the site writes them: "STORY FORMULAS" → "Story formulas". */
export function categoryLabel(post: BlogPost): string {
  const raw = (post.category || 'Parenting').trim()
  return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase()
}
