import adventure from '../../assets/app/adventure.webp'
import fantasy from '../../assets/app/fantasy.webp'
import animals from '../../assets/app/animals.webp'
import space from '../../assets/app/space.webp'
import dinosaurs from '../../assets/app/dinosaurs.webp'
import magic from '../../assets/app/magic.webp'
import princess from '../../assets/app/princess.webp'
import ocean from '../../assets/app/ocean.webp'
import pirates from '../../assets/app/pirates.webp'
import friendship from '../../assets/app/friendship.webp'
import science from '../../assets/app/science.webp'
import bedtime from '../../assets/app/bedtime.webp'
import history from '../../assets/app/history.webp'
import educational from '../../assets/app/educational.webp'
import custom from '../../assets/app/custom.webp'
import ScrollReveal from './ScrollReveal'

// The app's fifteen themes, in the app's order, with the app's own pictures.
const THEMES = [
  { name: 'Adventure', image: adventure },
  { name: 'Fantasy', image: fantasy },
  { name: 'Animals', image: animals },
  { name: 'Space', image: space },
  { name: 'Dinosaurs', image: dinosaurs },
  { name: 'Magic', image: magic },
  { name: 'Princess', image: princess },
  { name: 'Ocean', image: ocean },
  { name: 'Pirates', image: pirates },
  { name: 'Friendship', image: friendship },
  { name: 'Science', image: science },
  { name: 'Bedtime', image: bedtime },
  { name: 'History', image: history },
  { name: 'Learning', image: educational },
  { name: 'Custom', image: custom },
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

        <div className="mt-14 grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
          {THEMES.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 5) * 80} scale>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-[12/13]">
                <img src={t.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-950/90 to-transparent px-2 pt-8 pb-2">
                  <p className="text-xs sm:text-sm font-semibold text-white">{t.name}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

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
