// Writes public/sitemap.xml at build time with the fixed pages and every
// published blog post, so search engines learn about a post the day it
// goes up. If the API cannot be reached (a local build without network),
// the file already in public/ is kept.
import { writeFileSync } from 'node:fs'

const SITE = 'https://www.wondertaleshub.com'
const API = process.env.SITEMAP_API_BASE || 'https://api.wondertaleshub.com'
const fixed = [
  ['/', 'weekly', '1.0'],
  ['/blogs', 'weekly', '0.6'],
  ['/privacy', 'yearly', '0.3'],
  ['/terms', 'yearly', '0.3'],
  ['/delete-account', 'yearly', '0.3'],
]

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const url = (loc, changefreq, priority, lastmod) =>
  `  <url><loc>${esc(SITE + loc)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`

let posts = []
try {
  const res = await fetch(`${API}/v1/blogs/`, { signal: AbortSignal.timeout(10_000) })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  posts = (Array.isArray(data) ? data : data?.results || []).filter((p) => p && p.slug)
  console.log(`sitemap: ${posts.length} blog posts from the API`)
} catch (err) {
  console.warn(`sitemap: could not read the blog posts (${err.message}); keeping public/sitemap.xml as it is`)
  process.exit(0)
}

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...fixed.map(([loc, f, p]) => url(loc, f, p)),
  ...posts.map((p) =>
    url(`/blog/${p.slug}`, 'monthly', '0.5', (p.updated_at || p.created_at || '').slice(0, 10) || undefined),
  ),
  '</urlset>',
  '',
]
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), lines.join('\n'))
console.log(`sitemap: wrote ${fixed.length + posts.length} addresses`)
