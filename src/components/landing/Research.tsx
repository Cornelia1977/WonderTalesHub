import ScrollReveal from "./ScrollReveal";

export default function Research() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-360 w-11/12 text-center">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold text-gold tracking-widest uppercase">
            Backed By Science
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight uppercase">
            THE RESEARCH <span className="text-gold">IS CLEAR</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 font-normal leading-relaxed">
            Wonder Tales Hub doesn’t just entertain — it builds habits and skills that science has proven matter.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              stat: "+1HR",
              subtitle: "More sleep every night",
              desc: "A landmark study of 10,085 families across 14 countries found children with a consistent nightly bedtime routine sleep over an hour more per night.",
              ref: "Mindell et al. — Sleep, 2015,",
              link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4402657/",
            },
            {
              stat: "1.4M",
              subtitle: "More words heard by age 5",
              desc: "Ohio State University researchers found children read to daily hear up to 1.4 million more words by kindergarten than children not read to.",
              ref: "Logan JA et al. — Ohio State University, 2019.",
              link: "https://news.osu.edu/a-million-word-gap-for-children-who-arent-read-to-at-home/",
            },
            {
              stat: "3 IN 1",
              subtitle: "Sleep + Literacy + Bonding",
              desc: "A review in Sleep Medicine Reviews found bedtime routines benefit not just sleep, but child literacy outcomes, emotional regulation, and parent-child bonding.",
              ref: "Mindell & Williamson — Sleep Medicine Reviews, 2018.",
              link: "https://pubmed.ncbi.nlm.nih.gov/29195725/",
            },
          ].map((c, index) => (
            <ScrollReveal key={c.stat} delay={index * 150} scale>
              <div className="flex flex-col h-full rounded-xl border-t-[5px] border-t-[#C8913A] bg-linear-to-b from-navy-900/90 to-navy-900/80 p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#C8913A]/10">
                {/* Stat */}
                <p
                  className="text-5xl font-bold text-[#C8913A] tracking-wide"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {c.stat}
                </p>

                {/* Subtitle */}
                <p className="mt-3 text-base text-white font-medium leading-relaxed">
                  {c.subtitle}
                </p>

                {/* Description */}
                <p className="mt-6 text-sm text-white/50 font-normal leading-relaxed grow">
                  {c.desc}
                </p>

                {/* Divider */}
                <div className="mt-6 mb-4 border-t border-white/20 w-full" />

                {/* Reference */}
                <p className="text-xs text-gray-400 font-normal leading-relaxed">
                  {c.ref}
                </p>

                {/* Link */}
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm font-medium text-[#C8913A] hover:underline inline-block"
                  >
                    Read Study →
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="rounded-lg mt-8 leading-[155%] lg:mt-12 text-xs border-2 border-[#FFFFFF33] backdrop-blur-[2px] bg-[#ffffff0c] p-2 lg:p-3 shadow-2xl overflow-hidden">
          Wonder Tales Hub is designed to help families build the consistent nightly bedtime routine these studies describe. Individual results vary. Wonder Tales Hub is not a medical device and makes no clinical claims.
        </div>
      </div>
    </section>
  );
}
