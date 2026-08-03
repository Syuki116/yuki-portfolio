import { personal } from "../data/content";

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-14 lg:gap-16 items-center">
          {/* Left: intro text */}
          <div>
            <p className="text-sm text-muted tracking-wide mb-5 animate-fade-in">
              {personal.title}
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] text-ink leading-[1.1] tracking-tight mb-8 whitespace-pre-line animate-fade-in-up">
              {personal.tagline}
            </h1>

            <p className="text-lg font-light text-muted max-w-xl leading-relaxed mb-6 animate-fade-in-up delay-100">
            I'm a Data Science and Economics student at the University of Florida focused on using data to solve practical business and healthcare problems. {" "}
              <span className="text-ink font-medium">
              I combine statistical analysis, SQL, predictive modeling, and data visualization to identify opportunities, evaluate trade offs, and turn complex data into clear recommendations for decision makers.
              </span>
            </p>

            <div className="inline-flex flex-wrap items-center gap-2 text-xs tracking-wide uppercase text-sage border border-sage-light bg-white/50 px-3 py-2 mb-10 animate-fade-in-up delay-100">
              <span>Expected May 2027</span>
              <span aria-hidden="true">·</span>
              <span>U.S. citizen</span>
              <span aria-hidden="true">·</span>
              <span>No sponsorship required</span>
            </div>

            <div className="flex flex-wrap gap-4 items-center animate-fade-in-up delay-200">
              <a
                href="#projects"
                onClick={(e) => scrollTo(e, "#projects")}
                className="inline-flex items-center gap-2 bg-ink text-canvas text-sm font-medium px-6 py-3 hover:bg-sage transition-colors duration-200"
              >
                View My Work <span aria-hidden="true">↓</span>
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted border-b border-rule pb-px hover:text-ink hover:border-sage transition-colors duration-200"
              >
                Download Résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right: headshot */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative mx-auto w-64 sm:w-72 lg:w-full max-w-[320px]">
              <div className="absolute -inset-4 border border-sage-light rounded-[2rem] translate-x-3 translate-y-3" />

              <img
                src={personal.headshot}
                alt={`${personal.name} headshot`}
                className="relative w-full aspect-[4/5] object-cover rounded-[2rem] border border-rule shadow-sm bg-surface"
              />

              <div className="absolute -bottom-5 -left-5 bg-white border border-rule px-4 py-3 shadow-sm hidden sm:block">
                <p className="text-[0.68rem] uppercase tracking-[0.12em] text-sage font-semibold">
                  Product-minded analyst
                </p>
                <p className="text-xs text-muted mt-1">
                  Data · Statistics · Decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] tracking-[0.18em] uppercase text-muted/40">
          Scroll
        </span>
        <span className="block w-px h-8 bg-rule" />
      </div>
    </section>
  );
}