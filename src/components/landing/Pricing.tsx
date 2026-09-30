import { useState, useEffect } from 'react'
import checkCircle from '../../assets/check-circle.svg'
import ScrollReveal from './ScrollReveal'
import { fallbackCurrency, type Currency } from '../../utils/detectCurrency'
import { countryName, fetchStorePrices, formatPrice } from '../../utils/storePrices'

const PLANS = [
  {
    name: 'Classic',
    prices: { USD: '7.99', EUR: '8.99', GBP: '6.99' },
    storySummary: '8 AI stories / month',
    badge: null as string | null,
    special: null as string | null,
    features: [
      '8 AI-narrated stories / month',
      'Up to 4 child profiles',
      'All story themes and durations',
      'Save and replay',
      'Cancel anytime',
    ],
    bg: 'bg-[#0d114f]/80 backdrop-blur-sm',
    glow: 'shadow-2xl',
    borderClass: 'border-white/10',
    ctaClass: 'border border-white/30 text-white hover:bg-white/10',
    ctaGold: false,
  },
  {
    name: 'Premium',
    prices: { USD: '14.99', EUR: '16.99', GBP: '12.99' },
    storySummary: '16 stories / month',
    badge: 'MOST POPULAR',
    special: 'Next Chapter — Continue any story',
    features: [
      '14 AI stories + 2 family voice stories / month',
      'Record up to 3 family voices',
      'Up to 4 child profiles',
      'Save and replay',
      'Cancel anytime',
    ],
    bg: 'bg-[#1E67D6]',
    glow: 'shadow-[0_0_50px_rgba(30,103,214,0.55)]',
    borderClass: 'border-gold/60',
    ctaClass: 'bg-gold text-navy-950 hover:opacity-90',
    ctaGold: true,
  },
  {
    name: 'Every Night',
    prices: { USD: '24.99', EUR: '27.99', GBP: '21.99' },
    storySummary: '30 stories / month',
    badge: 'BACKED BY SCIENCE',
    special: 'Next Chapter — Continue any story',
    features: [
      '26 AI stories + 4 family voice stories = 30 total',
      'Sunday Special bonus voice story',
      'Record up to 3 family voices',
      'Up to 4 child profiles',
      'Save and replay',
      'Cancel anytime',
    ],
    bg: 'bg-[#0d114f]/80 backdrop-blur-sm',
    glow: 'shadow-2xl',
    borderClass: 'border-white/10',
    ctaClass: 'border border-white/30 text-white hover:bg-white/10',
    ctaGold: false,
  },
]

const SINGLE_PRICES: Record<Currency, { ai: string; voice: string }> = {
  // The App Store products: story_ai_single (1.99 USD) and
  // story_voice_single (2.99 USD). The other currencies are Apple's tiers.
  USD: { ai: '1.99', voice: '2.99' },
  EUR: { ai: '2.49', voice: '3.49' },
  GBP: { ai: '1.99', voice: '2.99' },
}

interface ShownPrices {
  currency: string
  plans: Record<string, string>
  singles: { ai: string; voice: string }
  /** Set when these are the App Store's prices for the visitor's country. */
  country: string | null
}

/** The table above, in the browser locale's currency. Shown until the App
 *  Store's prices arrive, and instead of them when they cannot be loaded. */
function fallbackPrices(): ShownPrices {
  const currency = fallbackCurrency()
  return {
    currency,
    plans: Object.fromEntries(PLANS.map((p) => [p.name, p.prices[currency]])),
    singles: SINGLE_PRICES[currency],
    country: null,
  }
}

export default function Pricing() {
  const [shown, setShown] = useState<ShownPrices>(fallbackPrices)

  // The prices set in App Store Connect for the visitor's country. Used only
  // when Apple has a price for every plan and single story, so one currency
  // is never mixed with another on the page.
  useEffect(() => {
    let cancelled = false
    fetchStorePrices().then((store) => {
      if (cancelled || !store) return
      const complete = PLANS.every((p) => store.plans[p.name]) && store.singles.ai && store.singles.voice
      if (!complete) return
      setShown({
        currency: store.currency,
        plans: store.plans,
        singles: { ai: store.singles.ai!, voice: store.singles.voice! },
        country: store.country,
      })
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="pricing" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-360 w-11/12 text-center">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold text-gold tracking-widest uppercase">
            Choose Your Plan
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Choose The Right<br />
            <span className="text-gold">Plan for You</span>
          </h2>

          {shown.country && (
            <p className="mt-6 text-[11px] text-white/40">
              App Store prices for {countryName(shown.country)}
            </p>
          )}
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
          {PLANS.map((p, index) => (
            <ScrollReveal key={p.name} delay={index * 150} scale>
              <div
                className={`relative rounded-2xl p-8 text-left ${p.bg} ${p.glow} border ${p.borderClass} hover:scale-[1.02] transition-all duration-300 h-full flex flex-col`}
              >
                {p.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full text-[10px] font-bold tracking-widest ${p.badge === 'MOST POPULAR'
                      ? 'bg-gold text-navy-950'
                      : 'bg-white/15 text-white border border-white/20'
                      }`}
                  >
                    {p.badge}
                  </div>
                )}

                <p className="text-base font-semibold text-white">{p.name}</p>
                <p className="mt-3 font-bold text-white text-4xl leading-none">
                  {formatPrice(shown.plans[p.name], shown.currency)}
                  <span className="text-[11px] font-medium text-white/70 ml-1">
                    /mo
                  </span>
                </p>
                <p className="mt-2 text-xs font-medium text-gold">
                  {p.storySummary}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {p.special && (
                    <li className="flex items-start gap-2 text-xs text-gold font-semibold">
                      <span className="mt-0.5 shrink-0">✦</span>
                      {p.special}
                    </li>
                  )}
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-xs text-white/90 font-normal"
                    >
                      <img
                        src={checkCircle}
                        alt=""
                        className="w-4 h-4 mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#download"
                  className={`mt-8 block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-all ${p.ctaClass}`}
                >
                  Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Single Story Prices */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-sm text-white/80">
            <span className="font-semibold text-white">
              Or buy single stories:
            </span>
            <span className="hidden sm:block text-white/30">|</span>
            <span>
              AI Story —{' '}
              <span className="text-white font-medium">
                {formatPrice(shown.singles.ai, shown.currency)}
              </span>{' '}
              each
            </span>
            <span className="hidden sm:block text-white/30">|</span>
            <span>
              Family Voice Story —{' '}
              <span className="text-white font-medium">
                {formatPrice(shown.singles.voice, shown.currency)}
              </span>{' '}
              each
            </span>
          </div>
          <p className="mt-5 text-sm font-medium text-gold">
            Try 1 story free — no credit card required
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}