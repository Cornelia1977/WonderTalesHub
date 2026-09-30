import ScrollReveal from './ScrollReveal'

// The answers match the app's own FAQ screen, so parents read the same
// thing before and after they install it.
const QUESTIONS = [
  {
    q: 'Is there a free story?',
    a: 'Yes. Every new account can create one story for free, with no card needed. After that, choose Classic, Premium or Every Night, or buy single stories one at a time.',
  },
  {
    q: 'What ages is it for?',
    a: 'Stories are written for children from 2 to 14, and each child profile has its own age, so a story for a three-year-old is not the story a ten-year-old gets. Accounts are for parents; children do not sign up.',
  },
  {
    q: 'Which languages can a story be told in?',
    a: 'Ten: English, French, Spanish, German, Portuguese, Italian, Bengali, Japanese, Arabic and Hindi. You choose the language for each story.',
  },
  {
    q: 'Whose voice can read the stories?',
    a: 'Any family member who agrees to it: they read a short passage for about a minute, in the app or through a link you send them. Or pick one of six storytellers. Recordings are used only to read your family’s stories, and you can delete a voice at any time.',
  },
  {
    q: 'Does it work offline?',
    a: 'Not yet. You need an internet connection to create stories and to play them.',
  },
  {
    q: 'How do I cancel?',
    a: 'Subscriptions are managed by Apple or Google, so you cancel in your App Store or Google Play subscription settings, any time. Stories you have already created stay in your Library.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl w-11/12">
        <ScrollReveal direction="up">
          <div className="text-center">
            <p className="text-xs font-semibold text-gold tracking-widest uppercase">Good to know</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Questions parents ask
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {QUESTIONS.map((item, i) => (
            <ScrollReveal key={item.q} delay={i * 80}>
              <details className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm open:border-gold/40 transition-colors">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left text-sm sm:text-base font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-white/70 leading-relaxed">{item.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
