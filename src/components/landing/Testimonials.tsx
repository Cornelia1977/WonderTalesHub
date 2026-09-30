import ScrollReveal from './ScrollReveal'

const USE_CASES = [
  {
    emoji: '✈️',
    heading: 'The Parent Who Travels for Work',
    scenario:
      'Imagine a parent on a business trip — still reading their child a personalized bedtime story every single night, in their own voice, even from a hotel room across the world.',
  },
  {
    emoji: '👵',
    heading: 'The Grandparent Far Away',
    scenario:
      'Imagine a grandmother in another country becoming part of her grandchildren\'s bedtime ritual. She records her voice once — and reads to them every night, as if she\'s right there.',
  },
  {
    emoji: '📖',
    heading: 'The Child Who Loves Their Story',
    scenario:
      'Imagine a child who actually runs to bed, eager to hear what happens next in the adventure where they are the hero. No more bedtime battles. Just magic, every night.',
  },
  {
    emoji: '🧠',
    heading: 'The Child Who Reads Earlier',
    scenario:
      'Imagine a child following every word as it lights up while the story is read aloud, night after night. Consistent bedtime stories are one of the strongest predictors of early literacy.',
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-24 lg:px-8 bg-navy-950">
      <div className="mx-auto max-w-360 w-11/12 text-center">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold text-gold tracking-widest uppercase">Designed For Families Like Yours</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight uppercase">
            BUILT FOR <span className="text-gold">REAL FAMILIES</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 font-normal leading-relaxed">
            Wonder Tales Hub was built with one goal: making bedtime magical for every family, no matter where you are.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 w-full mx-auto">
          {USE_CASES.map((item, i) => (
            <ScrollReveal key={item.heading} delay={i * 150} scale>
              <div className="flex flex-col h-full rounded-2xl border border-white/10 bg-[#14195a] p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 text-left">
                <span className="text-4xl mb-4 select-none">{item.emoji}</span>
                <h3 className="text-base font-semibold text-gold mb-3">{item.heading}</h3>
                <p className="text-base text-white/80 font-normal leading-relaxed flex-1">
                  {item.scenario}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
