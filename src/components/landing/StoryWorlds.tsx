import space from '../../assets/app/space.webp'
import dinosaurs from '../../assets/app/dinosaurs.webp'
import ocean from '../../assets/app/ocean.webp'
import princess from '../../assets/app/princess.webp'
import magic from '../../assets/app/magic.webp'
import pirates from '../../assets/app/pirates.webp'
import ScrollReveal from './ScrollReveal'

// Six of the app's fifteen themes, with the app's own pictures.
const THEMES = [
  { name: 'Space', image: space },
  { name: 'Dinosaurs', image: dinosaurs },
  { name: 'Ocean', image: ocean },
  { name: 'Princess', image: princess },
  { name: 'Magic', image: magic },
  { name: 'Pirates', image: pirates },
]

// The ten languages the app tells stories in, as the app names them.
const LANGUAGES = ['English', 'Français', 'Español', 'Deutsch', 'Português', 'Italiano', 'বাংলা', '日本語', 'العربية', 'हिन्दी']

export default function StoryWorlds() {
  return (
    <section id="stories" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-360 w-11/12 text-center">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold text-gold tracking-widest uppercase">Every night is different</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Fifteen worlds, <span className="text-gold">ten languages</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 font-normal leading-relaxed">
            Pick a theme, a length of 3, 5 or 10 minutes, and the language you speak at home. Your child is the hero in every one, and the words light up as they are read.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {THEMES.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100} scale>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-[12/13]">
                <img src={t.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-950/90 to-transparent px-2 pt-8 pb-2">
                  <p className="text-xs sm:text-sm font-semibold text-white">{t.name}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/50">…and Adventure, Fantasy, Animals, Friendship, Science, Bedtime, History, Learning, or your own idea.</p>

        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {LANGUAGES.map((l) => (
              <span key={l} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/85">
                {l}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
