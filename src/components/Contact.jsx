import { personal } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();

  const links = [
    {
      label: "Email",
      href: `mailto:${personal.email}`,
      display: personal.email,
      external: false,
    },
    {
      label: "LinkedIn",
      href: personal.linkedin,
      display: "www.linkedin.com/in/xinyu-shen-uf",
      external: true,
    },
    {
      label: "GitHub",
      href: personal.github,
      display: "github.com/Syuki116",
      external: true,
    },
    {
      label: "Résumé",
      href: personal.resume,
      display: "Download PDF",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="section-label">Contact</div>

        <div ref={ref} className="reveal-block">
          <p className="font-display text-2xl sm:text-3xl text-ink leading-snug max-w-lg mb-10">
            Open to product analyst, data analyst, and graduate program
            opportunities. Let's talk.
          </p>

          <div className="flex flex-col gap-4">
            {links.map(({ label, href, display, external }) => (
              <div key={label} className="flex items-baseline gap-5">
                <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-muted w-20 shrink-0">
                  {label}
                </span>

                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="text-[0.9375rem] text-ink border-b border-rule pb-px hover:text-sage hover:border-sage transition-colors duration-150"
                >
                  {display}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}