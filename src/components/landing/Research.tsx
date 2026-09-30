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
            A story every night builds habits that science says matter.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              stat: "+1HR",
              subtitle: "More sleep every night",
              desc: "Children with a consistent bedtime routine sleep over an hour more a night, across 10,085 families in 14 countries.",
              ref: "Mindell et al. — Sleep, 2015,",
              link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4402657/",
            },
            {
              stat: "1.4M",
              subtitle: "More words heard by age 5",
              desc: "Children read to every day hear up to 1.4 million more words by kindergarten.",
              ref: "Logan JA et al. — Ohio State University, 2019.",
              link: "https://news.osu.edu/a-million-word-gap-for-children-who-arent-read-to-at-home/",
            },
            {
              stat: "3 IN 1",
              subtitle: "Sleep + Literacy + Bonding",
              desc: "Bedtime routines help sleep, early reading, emotional balance and the bond between parent and child.",
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
                <p className="mt-6 text-sm text-white/70 font-normal leading-relaxed grow">
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
        <p className="mt-8 text-xs text-white/50 leading-relaxed">
          These studies are about bedtime routines in general. Individual results vary; Wonder Tales Hub is not a medical device.
        </p>
      </div>
    </section>
  );
}
