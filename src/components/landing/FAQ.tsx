import ScrollReveal from './ScrollReveal'
import { QUESTIONS } from './faqQuestions'

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
