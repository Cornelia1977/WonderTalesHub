import { create } from 'zustand'
import type { BlogPost } from '../types/blog'
import { getApiBase } from '../config/api'

interface BlogState {
  blogs: BlogPost[]
  activeBlog: BlogPost | null
  loading: boolean
  error: string | null
  fetchBlogs: () => Promise<void>
  fetchBlogBySlug: (slug: string) => Promise<BlogPost | null>
  getBlogBySlug: (slug: string) => BlogPost | undefined
}

// The sample posts' covers, made from the prompts in docs/BLOG_COVERS.md.
import coverBedtime from '../assets/blog/storytelling-bedtime.jpg'
import coverDreamWeaver from '../assets/blog/dream-weaver-guide.jpg'
import coverNightTales from '../assets/blog/enchanting-night-tales.jpg'

const mockBlogs: BlogPost[] = [
  {
    slug: 'storytelling-bedtime',
    title: 'The Art of Storytelling: How to Read Bedtime Stories',
    excerpt: 'Turn the bedtime routine into a calm ritual with cozy pacing, warm voice, and simple storytelling tricks.',
    category: 'Parenting',
    date: 'May 16, 2026',
    image: coverBedtime,
    content:
      'There is a distinct kind of magic that settles over a home at the end of the day. The frantic energy of school, work, and play begins to fade, replaced by the soft glow of a bedside lamp and the quiet rustle of turning pages.\nReading a bedtime story isn\'t just a checklist item before turning off the lights—it is an art form. Done right, it bridges the gap between a hectic day and a peaceful night\'s sleep, building a sanctuary of warmth, imagination, and security for your child.\nHere is how you can master the art of the bedtime story and turn a simple routine into an unforgettable nightly ritual.\n\n1. Set the Stage\n\nBefore you even open the cover, you need to cultivate the right environment. The transition from the high stimulation of evening activities to a sleep-ready state requires sensory cues.\n\n• Dim the Lights: Switch off harsh overhead lighting. Use a warm bedside lamp or a reading light just bright enough to see the text.\n• Get Cozy: Ensure the physical space is comfortable. Pile up pillows, pull up the blankets, and sit close enough that your child can feel your presence and easily view the illustrations.\n• Leave Electronics Outside: The bedroom should be a screen-free zone during this time. No notification pings, no scrolling—just the two of you and the book.\n\n2. Master Your Delivery\n\nRead slowly and intentionally. Let each sentence breathe. Use gentle inflections and pauses at key moments, and lean into the emotional beats of the story. This helps your child tune in, follow the plot, and feel the rhythm of the narrative.\n\n3. Create Connection\n\nAsk simple questions as you go: "What do you think will happen next?" or "How does this character feel?" This keeps your child engaged while strengthening their imagination and making the story feel personal.\n\nThe Ultimate Benefit\n\nA bedtime story done with care does more than entertain. It creates a nightly ritual that builds trust, deepens connection, and nurtures a love of reading that can last a lifetime.',
  },
  {
    slug: 'dream-weaver-guide',
    title: "How to Invent a Bedtime Story on the Spot (Even When You're Exhausted)",
    excerpt: 'Learn how to shape characters, set a gentle tone, and keep adventures calm enough for sleepy imaginations.',
    category: 'STORY FORMULAS',
    date: 'May 14, 2026',
    image: coverDreamWeaver,
    content:
      `Who, where, uh-oh, how. The four-question formula that turns "tell me
one from your head" into ten minutes of magic — and the cliffhanger
trick that makes kids want to go to bed.`,
  },
  {
    slug: 'enchanting-night-tales',
    title: 'Enchanting Night Tales: Unleash Your Child\'s Imagination',
    excerpt: `An hour more sleep. 1.4 million more words by kindergarten. Stronger
bonds. A plain-English tour of the studies behind the humble bedtime
story — with sources.`,
    category: 'THE SCIENCE',
    date: 'May 12, 2026',
    image: coverNightTales,
    content:
      `An hour more sleep. 1.4 million more words by kindergarten. Stronger
bonds. A plain-English tour of the studies behind the humble bedtime
story — with sources.`,
  },
]

const API_BASE = getApiBase();

type RawBlogPost = {
  slug?: string
  title?: string
  content?: string
  excerpt?: string
  tags_list?: string[]
  created_at?: string
  updated_at?: string
  image?: string
  [key: string]: unknown
}

const slugOf = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/** The painted cover for a post the admin has no picture for: the sample
 *  post with the same slug or title, else the first sample's cover. */
const sampleCover = (b: RawBlogPost): string => {
  const slug = b.slug || ''
  const titleSlug = slugOf(b.title || '')
  const match = mockBlogs.find(
    (m) => m.slug === slug || slugOf(m.title) === titleSlug || slugOf(m.title) === slug,
  )
  return match ? match.image || coverBedtime : coverBedtime
}

// The day the post was published, not the day its cover was last changed.
const dateOf = (b: RawBlogPost) =>
  b.created_at || b.updated_at
    ? new Date((b.created_at || b.updated_at) as string).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Recently'

const fromApi = (b: RawBlogPost): BlogPost => ({
  ...(b as BlogPost),
  excerpt: b.content ? b.content.substring(0, 120) + '...' : b.excerpt || '',
  category: b.tags_list && b.tags_list.length > 0 ? b.tags_list[0] : 'Parenting',
  date: dateOf(b),
  image: b.image ? (b.image.startsWith('http') ? b.image : `${API_BASE}${b.image}`) : sampleCover(b),
})

// Empty until the backend answers, so the page shows "Turning the pages…"
// instead of flashing the sample posts before the real ones replace them.
export const useBlogStore = create<BlogState>((set, get) => ({
  blogs: [],
  activeBlog: null,
  loading: true,
  error: null,

  fetchBlogs: async () => {
    set({ loading: true, error: null })
    try {
      const res = await fetch(`${API_BASE}/v1/blogs/`)
      if (!res.ok) throw new Error('Failed to fetch blogs')
      const data = await res.json()
      const list: RawBlogPost[] = Array.isArray(data) ? data : data?.results || []
      if (list.length > 0) {
        set({ blogs: list.map(fromApi), loading: false })
      } else {
        set({ blogs: mockBlogs, loading: false })
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      console.warn('API fetch failed, falling back to mock blogs:', message)
      set({ blogs: mockBlogs, loading: false })
    }
  },

  fetchBlogBySlug: async (slug: string) => {
    set({ loading: true, error: null })
    try {
      const res = await fetch(`${API_BASE}/v1/blogs/${slug}/`)
      if (!res.ok) throw new Error('Blog post not found')
      const mapped = fromApi(await res.json())
      set({ activeBlog: mapped, loading: false })
      return mapped
    } catch (err) {
      // Fallback to mock blogs
      const mockFound = mockBlogs.find((item) => item.slug === slug)
      if (mockFound) {
        set({ activeBlog: mockFound, loading: false })
        return mockFound
      }
      const message = err instanceof Error ? err.message : String(err)
      set({ loading: false, error: message })
      return null
    }
  },

  getBlogBySlug: (slug: string) => {
    return get().blogs.find((item) => item.slug === slug)
  },
}))
