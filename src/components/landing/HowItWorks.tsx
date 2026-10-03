import howItWorksImage from '../../assets/howitworksimg.webp'
import hiwBgImg from '../../assets/hiwbgimg.webp'
import icon1 from '../../assets/cartoon-boy.webp'
import icon2 from '../../assets/image-20.webp'
import icon3 from '../../assets/image-22.webp'
import ScrollReveal from './ScrollReveal'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden px-6 pt-24 pb-0 md:py-28 lg:px-8 min-h-[700px] flex flex-col md:flex-row items-center bg-linear-to-br from-navy-950/90 via-navy-700/80 to-navy-900/90">

      {/* Actual Starry Constellation Background Vector */}
      <img
        src={hiwBgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60"
      />

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto w-11/12 max-w-360">
        <div className="max-w-2xl space-y-12">
          <ScrollReveal direction="up">
            <div>
              <p className="text-sm font-medium text-gold tracking-widest uppercase">How It Works</p>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Create Magical Stories in <span className="text-gold">3</span> Simple Steps
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-3 pb-12 md:pb-0 mt-8">
            {[
              { icon: icon1, title: 'Add your child', desc: 'Their name and age, so every story is written for them.' },
              { icon: icon2, title: 'Choose the story', desc: 'A theme, a narrator or family voice, a length and a language.' },
              { icon: icon3, title: 'Listen together', desc: 'The words light up as they are read. Replay it, or continue with Next Chapter.' },
            ].map((s, index) => (
              <ScrollReveal key={s.title} delay={index * 150} scale>
                <div className="relative rounded-2xl border border-white/10 bg-linear-to-b from-[#E89C30]/20 to-[#FFDBA8]/20 pt-12 pb-6 px-6 text-left hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-6 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-b from-[#E89C30]/20 to-[#FFDBA8]/20 border-2 border-gold shadow-[0_0_15px_rgba(232,160,32,0.25)] p-2.5">
                    <img src={s.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-base font-semibold text-gold mt-1">{s.title}</h3>
                  <p className="mt-2 text-xs text-white/70 font-normal leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Father-Daughter Illustration */}
      <div className="relative md:absolute bottom-0 right-0 w-full md:w-[40%] lg:w-[35%] h-[350px] md:h-[90%] max-h-[600px] z-0 pointer-events-none mt-auto">
        <ScrollReveal direction="left" duration={1200}>
          <img
            src={howItWorksImage}
            alt="The Wonder Tales Hub app on a phone, creating a story"
            loading="lazy"
            className="w-full h-full object-contain md:object-bottom-right object-bottom"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}


