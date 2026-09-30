import handImg from '../../assets/handimg.webp'

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

const ROLE_CARDS = [
  { emoji: '👱‍♀️', title: 'Mom', desc: 'Always there' },
  { emoji: '👨', title: 'Dad', desc: 'Even traveling' },
  { emoji: '👵', title: 'Grandma', desc: 'From anywhere' },
  { emoji: '👴', title: 'Grandpa', desc: 'Every night' },
]

export default function VoiceClone() {
  return (
    <section id="voice" className="relative overflow-hidden py-16 lg:py-24 bg-linear-to-br from-navy-950/90 via-navy-700/80 to-navy-900/90">

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-navy-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-360 w-11/12  flex flex-col lg:flex-row items-center justify-center gap-12">

        <div className="w-full lg:w-[60%] py-12 flex flex-col items-center text-center space-y-8">

          <div className="space-y-4 max-w-xl">
            <p className="text-xs font-semibold text-gold tracking-widest uppercase">
              Your Voice, Their Comfort
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Clone Your Voice in Seconds
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed">
              Record 2 minutes of any family member's voice and they narrate a brand-new personalized story every single night. Grandma from across the world. Dad on a work trip. Always there at bedtime.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 h-16 w-full max-w-xs py-2" aria-hidden="true">
            {WAVE_BARS.map(([height, delay, duration], i) => (
              <span
                key={i}
                className="voice-wave-bar w-2 rounded-full bg-linear-to-b from-[#f5c060] to-gold"
                style={{
                  height: `${height}px`,
                  animationDelay: delay,
                  animationDuration: duration,
                  boxShadow: '0 0 10px rgba(232,160,32,0.3)',
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl pt-4">
            {ROLE_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <span className="text-4xl mb-3 filter drop-shadow-md select-none">{card.emoji}</span>
                <h3 className="text-sm font-semibold text-gold">{card.title}</h3>
                <p className="mt-1 text-[11px] text-white/60 font-normal">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
      <div className="absolute right-0 bottom-0">
        <div className="">
          {/* Main Mockup Image */}
          <img
            src={handImg}
            alt="Mobile App in Hand"
            className="w-full h-[600px] md:h-auto object-contain opacity-50 md:opacity-100 drop-shadow-[0_0_40px_rgba(232,160,32,0.12)]"
          />
        </div>
      </div>
    </section>
  )
}
