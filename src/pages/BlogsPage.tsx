import { useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import StarrySky from '../components/landing/StarrySky'
import ScrollReveal from '../components/landing/ScrollReveal'
import { useBlogStore } from '../cotexts/blogStore'

/** Notes for parents: the newest post large, the rest as cards, on the
 *  same night sky as the rest of the site. */
export default function BlogsPage() {
  const { blogs, fetchBlogs, loading } = useBlogStore()

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchBlogs()
  }, [fetchBlogs])

  const [featured, ...rest] = blogs

  return (
    <div className="relative isolate overflow-hidden pt-32 pb-24">
      <StarrySky />
      <div className="mx-auto w-11/12 max-w-360">
        <ScrollReveal direction="up">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Notes for parents</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Bedtime, <span className="text-gold">explained</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Short reads on stories, sleep and the small rituals that make the end of the day the best part of it. Written for tired parents, in plain words.
            </p>
          </div>
        </ScrollReveal>

        {loading && blogs.length === 0 ? (
          <div className="mt-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent" />
            <p className="mt-4 text-white/60">Turning the pages…</p>
          </div>
        ) : (
          <>
            {featured && (
              <ScrollReveal direction="up" delay={100}>
                <div className="mt-14">
                  <BlogCard post={featured} featured />
                </div>
              </ScrollReveal>
            )}
            {rest.length > 0 && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={(i % 3) * 100} scale>
                    <BlogCard post={post} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
