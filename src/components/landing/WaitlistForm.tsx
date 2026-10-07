import { useState } from 'react'
import { getApiBase } from '../../config/api'
import { getCountry } from '../../utils/siteStats'

type Platform = 'ios' | 'android' | ''
type State = 'idle' | 'sending' | 'sent' | 'error'

const MESSAGES: Record<string, string> = {
  confirmed: 'You are on the list. We will write once, on launch day.',
  left: 'Your address has been removed.',
  unknown: 'That link has expired. You can sign up again below.',
}

/** "Tell me when it's in the stores": the download section's form while the
 *  app is not yet published (backend: apps/payments/waitlist.py). The address
 *  only counts once its owner confirms it from the email we send. */
export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState<Platform>('')
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')
  // After the confirm or leave link, the server sends the visitor back here.
  const [banner] = useState(() => MESSAGES[new URLSearchParams(window.location.search).get('waitlist') ?? ''] ?? '')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    setError('')
    try {
      const res = await fetch(`${getApiBase()}/v1/site/waitlist/`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        credentials: 'omit',
        body: JSON.stringify({
          email,
          platform,
          country: await getCountry(),
          referrer: document.referrer,
          url: window.location.href,
        }),
      })
      if (res.ok) {
        setState('sent')
        return
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      setError(res.status === 429 ? 'Too many tries. Please try again in an hour.' : data.error || 'Something went wrong. Please try again.')
      setState('error')
    } catch {
      setError('We could not reach our server. Please try again.')
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-gold/40 bg-navy-950/60 px-5 py-4 max-w-md" role="status">
        <p className="font-semibold text-white">Check your inbox</p>
        <p className="text-sm text-white/75 mt-1">
          We sent a link to <span className="text-white">{email}</span>. Click it to confirm, and we will write once, on
          launch day.
        </p>
      </div>
    )
  }

  const choice = (value: Platform, label: string) => (
    <button
      type="button"
      onClick={() => setPlatform(value)}
      aria-pressed={platform === value}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
        platform === value ? 'border-gold bg-gold/20 text-white' : 'border-white/25 text-white/70 hover:border-white/50'
      }`}
    >
      {label}
    </button>
  )

  return (
    <form onSubmit={submit} className="w-full max-w-md space-y-3">
      {banner && (
        <p className="rounded-xl border border-gold/40 bg-navy-950/60 px-4 py-2 text-sm text-white" role="status">
          {banner}
        </p>
      )}
      <label htmlFor="waitlist-email" className="block text-sm font-semibold text-white">
        Be the first to know when it arrives
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="waitlist-email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-full bg-white/95 px-5 py-3 text-sm text-navy-950 placeholder:text-navy-950/50 outline-none focus:ring-2 focus:ring-gold"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="rounded-full bg-linear-to-b from-[#E89C30] to-[#FFDBA7] px-6 py-3 text-sm font-semibold text-navy-950 shadow-[0_0_18px_rgba(232,160,32,0.35)] hover:opacity-90 transition disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending…' : 'Notify me'}
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-white/60">My phone:</span>
        {choice('ios', 'iPhone / iPad')}
        {choice('android', 'Android')}
        {choice('', 'Either')}
      </div>
      {error && <p className="text-sm text-[#FFB4A2]" role="alert">{error}</p>}
      <p className="text-xs text-white/55">
        One email on launch day, nothing else. Unsubscribe from any email. See our{' '}
        <a href="/privacy" className="underline hover:text-white">privacy policy</a>.
      </p>
    </form>
  )
}
