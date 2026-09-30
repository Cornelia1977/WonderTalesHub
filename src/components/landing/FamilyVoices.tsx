import handImg from '../../assets/handimg.webp'
import luna from '../../assets/app/luna.webp'
import atlas from '../../assets/app/atlas.webp'
import grandma from '../../assets/app/grandma.webp'
import grandpa from '../../assets/app/grandpa.webp'
import ScrollReveal from './ScrollReveal'

// Waveform bar default heights and animation parameters
// Format: [height_px, animation_delay, animation_duration]
const WAVE_BARS: [number, string, string][] = [
  [16, '0s', '1.0s'],
  [24, '0.15s', '1.2s'],
  [40, '0.3s', '0.9s'],
  [56, '0.45s', '1.1s'],
  [64, '0.6s', '1.3s'],
  [56, '0.45s', '1.1s'],
  [40, '0.3s', '0.9s'],
  [24, '0.15s', '1.2s'],
  [16, '0s', '1.0s'],
]

// The words are the app's: it says "family voice", never "clone".
const STEPS = [
  {
    step: '1',
    title: 'Record once, about a minute',
    desc: 'Read a short passage in the app. That is all it takes for Mum, Dad or Grandma to read every story from then on.',
  },
  {
    step: '2',
    title: 'Far away? Send a link',
    desc: 'Grandma in another country records from her own phone through a link that works for a week. No app needed.',
  },
  {
    step: '3',
    title: 'Their voice, every night',
    desc: 'Choose Family Voice when you create a story, and a new adventure is read in the voice your child knows.',
  },
]

// The app's storytellers, with their own portraits, for nights without a
// family recording.
const STORYTELLERS = [
  { name: 'Luna', role: 'Warm mum', image: luna },
  { name: 'Atlas', role: 'Warm dad', image: atlas },
  { name: 'Grandma', role: 'Cosy stories', image: grandma },
  { name: 'Grandpa', role: 'Cosy stories', image: grandpa },
]

export default function FamilyVoices() {
  return (
    <section id="voice" className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-navy-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-360 w-11/12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-[58%] py-8 space-y-10">
          <ScrollReveal direction="up">
            <div className="space-y-4 max-w-xl">
              <p className="text-xs font-semibold text-gold tracking-widest uppercase">Your Voice, Their Comfort</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Family voices, every night
              </h2>
              <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed">
                Record a loved one once and they can read every bedtime story. Grandma from across the world. Dad on a work trip. Always there at bedtime.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex items-center gap-2 h-16 max-w-xs py-2" aria-hidden="true">
            {WAVE_BARS.map(([height, delay, duration], i) => (
              <span
                key={i}
                className="voice-wave-bar w-2 rounded-full bg-linear-to-b from-[#f5c060] to-gold"
                style={{ height: `${height}px`, animationDelay: delay, animationDuration: duration, boxShadow: '0 0 10px rgba(232,160,32,0.3)' }}
              />
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 150} scale>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:border-gold/30">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/60 font-serif text-gold text-base">{s.step}</span>
                  <h3 className="mt-3 text-sm font-semibold text-gold">{s.title}</h3>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[38%]">
          <ScrollReveal direction="left">
            <div className="rounded-3xl border border-white/10 bg-navy-900/60 backdrop-blur-sm p-6 sm:p-8">
              <p className="text-xs font-semibold text-gold tracking-widest uppercase">No recording tonight?</p>
              <h3 className="mt-2 font-serif text-2xl text-white">Meet the storytellers</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Six narrators, from a warm mum to a sleepy-time voice, ready in ten languages.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {STORYTELLERS.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <img src={s.image} alt="" className="h-14 w-14 rounded-full object-cover border-2 border-gold/50 shadow-[0_0_15px_rgba(232,160,32,0.2)]" />
                    <div>
                      <p className="text-sm font-semibold text-white">{s.name}</p>
                      <p className="text-[11px] text-white/60">{s.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* The phone in a hand: only where there is room beside the text. */}
      <div className="absolute right-0 bottom-0 hidden xl:block pointer-events-none">
        <img src={handImg} alt="" className="h-[520px] object-contain opacity-40 drop-shadow-[0_0_40px_rgba(232,160,32,0.12)]" />
      </div>
    </section>
  )
}
