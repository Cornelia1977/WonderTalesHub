import ScrollReveal from './ScrollReveal'

const USE_CASES = [
  {
    emoji: '✈️',
    heading: 'The Parent Who Travels for Work',
    scenario: 'Still reads the bedtime story every night, in their own voice, from a hotel room across the world.',
  },
  {
    emoji: '👵',
    heading: 'The Grandparent Far Away',
    scenario: 'Records her voice once and reads to her grandchildren every night, as if she were right there.',
  },
  {
    emoji: '📖',
    heading: 'The Child Who Loves Their Story',
    scenario: 'Runs to bed to hear what happens next in the adventure where they are the hero. No more bedtime battles.',
  },
  {
    emoji: '🧠',
    heading: 'The Child Who Reads Earlier',
    scenario: 'Follows every word as it lights up, night after night. Bedtime stories are one of the strongest predictors of early reading.',
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-360 w-11/12 text-center">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold text-gold tracking-widest uppercase">Designed For Families Like Yours</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight uppercase">
            BUILT FOR <span className="text-gold">REAL FAMILIES</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 font-normal leading-relaxed">
            Bedtime magic for every family, wherever you are.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full mx-auto">
          {USE_CASES.map((item, i) => (
            <ScrollReveal key={item.heading} delay={i * 150} scale>
              <div className="flex flex-col h-full rounded-2xl border border-white/10 bg-[#14195a] p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 text-left">
                <span className="text-3xl mb-3 select-none">{item.emoji}</span>
                <h3 className="text-base font-semibold text-gold mb-3">{item.heading}</h3>
                <p className="text-sm text-white/80 font-normal leading-relaxed flex-1">
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
