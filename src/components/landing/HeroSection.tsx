import heroImage from "../../assets/hero-image.webp";
import StoreBadges from "../StoreBadges";
import bookIcon from "../../assets/Book.svg";
import booksIcon from "../../assets/Books.svg";
import aiMicIcon from "../../assets/AI Mic.svg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-16">
      <img
        src={heroImage}
        alt=""
        className="absolute object-[75%] inset-0 w-full h-full object-cover lg:object-top z-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-linear-to-br from-navy-950/10 via-navy-700/10 to-navy-900/10 z-0" />

      <div className="relative z-10 mx-auto w-11/12 max-w-360  mt-32">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-gold text-lg leading-none">✨</span>
            <span className="text-xs text-white/80 font-normal tracking-wider">
              Personalized · Family-Narrated
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[1.1] tracking-wide text-white sm:text-6xl lg:text-[4.5rem]">
            EVERY NIGHT, A&nbsp;NEW CHAPTER.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[#E89C30] to-[#FFDBA8]">
              THE SAME HERO.
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-2xl text-white/90 leading-[180%]">
            Your child becomes the named hero of a magical saga narrated by AI
            or a loved one.
          </p>

          {/* Store Buttons */}
          <div className="pt-2">
            <StoreBadges className="h-12" />
          </div>

          {/* Research Banner */}
          <div className="border-2 border-[#FFFFFF33] backdrop-blur-[2px] bg-[#ffffff0c] rounded-2xl p-2 md:px-6 md:py-5">
            <p className="text-[15px] text-white font-normal leading-snug">
              Built on peer-reviewed research from{" "}
              <span className="text-orange-400 font-medium">3 studies</span>{" "}
              published in Sleep, in Sleep Medicine Reviews, and by Ohio State University.
            </p>
          </div>
        </div>
      </div>

      {/* ===== FEATURES STRIP ===== */}
      <div id="features" className="relative z-20 mx-auto w-11/12 max-w-360 md:mt-16 mt-8 scroll-mt-24">
        <div className="rounded-3xl border-2 border-[#FFFFFF33] backdrop-blur-[2px] bg-[#ffffff0c] p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute inset-0 "></div>

          <div className="relative grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-3 md:divide-x-2 divide-white/30">
            {[
              {
                icon: bookIcon,
                title: "AI Generated Stories",
                desc: "A new story every night, with your child as the hero",
              },
              {
                icon: aiMicIcon,
                title: "Your Voice, Their Story",
                desc: "Record a loved one once; they read every story",
              },
              {
                icon: booksIcon,
                title: "Endless Adventure",
                desc: "Fifteen worlds, ten languages, and Next Chapter",
              },
            ].map((f, idx) => (
              <div
                key={f.title}
                className={`flex flex-row items-center gap-4 ${idx !== 0 ? "md:pl-8" : ""}`}
              >
                {/* Icon Circle */}
                <div className="relative">
                  <div className="relative h-14 w-14 flex items-center justify-center rounded-full bg-linear-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 backdrop-blur-sm">
                    <img src={f.icon} alt="" className="h-9 w-9 opacity-90" />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white font-normal leading-relaxed max-w-xs">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
