import { useMemo } from 'react'

/** A night sky behind the whole landing page, so the stars of the hero
 *  carry on down past the sections that have no picture of their own.
 *  Drawn, not an image: a few hundred dots in an SVG and some soft glows,
 *  placed in percentages so they spread over the page at any height. */

// The same sky on every visit: a small seeded generator instead of Math.random.
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

interface Star {
  x: number
  y: number
  r: number
  opacity: number
  twinkle: boolean
  delay: number
}

const STAR_COUNT = 560

// Soft purple and blue glows, like the sky in the hero picture.
const GLOWS = [
  { top: '8%', left: '70%', size: '42rem', color: 'rgba(124, 92, 255, 0.16)' },
  { top: '22%', left: '-8%', size: '38rem', color: 'rgba(76, 110, 245, 0.14)' },
  { top: '38%', left: '55%', size: '46rem', color: 'rgba(150, 90, 230, 0.13)' },
  { top: '55%', left: '5%', size: '40rem', color: 'rgba(90, 120, 255, 0.12)' },
  { top: '72%', left: '65%', size: '44rem', color: 'rgba(124, 92, 255, 0.14)' },
  { top: '88%', left: '15%', size: '36rem', color: 'rgba(232, 160, 32, 0.06)' },
]

export default function StarrySky() {
  const stars = useMemo<Star[]>(() => {
    const random = seeded(20260930)
    return Array.from({ length: STAR_COUNT }, () => {
      const bright = random() > 0.86
      return {
        x: random() * 100,
        y: random() * 100,
        r: bright ? 1.1 + random() * 0.8 : 0.4 + random() * 0.7,
        opacity: bright ? 0.8 + random() * 0.2 : 0.3 + random() * 0.45,
        twinkle: random() > 0.7,
        delay: random() * 6,
      }
    })
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {GLOWS.map((g) => (
        <div
          key={`${g.top}-${g.left}`}
          className="absolute rounded-full blur-3xl"
          style={{
            top: g.top,
            left: g.left,
            width: g.size,
            height: g.size,
            maxWidth: '120vw',
            maxHeight: '120vw',
            background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          }}
        />
      ))}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill={s.r > 1.1 ? '#FFF4DC' : '#FFFFFF'}
            opacity={s.opacity}
            className={s.twinkle ? 'star-twinkle' : undefined}
            style={s.twinkle ? { animationDelay: `${s.delay}s` } : undefined}
          />
        ))}
      </svg>
    </div>
  )
}
