import { useState, useEffect } from 'react'
import checkCircle from '../../assets/check-circle.svg'
import ScrollReveal from './ScrollReveal'
import {
  detectUserCurrency,
  saveCurrencyPreference,
  type Currency,
} from '../../utils/detectCurrency'

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
}

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
  USD: { ai: '$1.99', voice: '$2.99' },
  EUR: { ai: '€2.49', voice: '€3.49' },
  GBP: { ai: '£1.99', voice: '£2.99' },
}

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [detectionSource, setDetectionSource] = useState<
    'storage' | 'locale' | 'default' | null
  >(null)

  // Auto-detect on mount
  useEffect(() => {
    let cancelled = false
    detectUserCurrency().then(({ currency: detected, source }) => {
      if (!cancelled) {
        setCurrency(detected)
        setDetectionSource(source)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  const handleCurrencyChange = (c: Currency) => {
    setCurrency(c)
    saveCurrencyPreference(c)
    setDetectionSource('storage')
  }

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

          {/* Currency Selector */}
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              {(['USD', 'EUR', 'GBP'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => handleCurrencyChange(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${currency === c
                    ? 'bg-gold text-navy-950'
                    : 'border border-white/20 text-white/70 hover:text-white hover:border-white/40'
                    }`}
                >
                  {c} {CURRENCY_SYMBOLS[c]}
                </button>
              ))}
            </div>
            {detectionSource && detectionSource !== 'default' && (
              <p className="text-[10px] text-white/40 mt-1">
                Prices shown in{' '}
                <span className="text-white/60">
                  {currency} ({CURRENCY_SYMBOLS[currency]})
                </span>{' '}
                based on your{' '}
                {detectionSource === 'storage' ? 'previous selection' : 'browser language'}
              </p>
            )}
          </div>
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
                  {CURRENCY_SYMBOLS[currency]}
                  {p.prices[currency]}
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
                {SINGLE_PRICES[currency].ai}
              </span>{' '}
              each
            </span>
            <span className="hidden sm:block text-white/30">|</span>
            <span>
              Family Voice Story —{' '}
              <span className="text-white font-medium">
                {SINGLE_PRICES[currency].voice}
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