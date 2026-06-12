import { personal } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

const quickInfo = [
  { label: "Degree",   value: "B.S. Data Science · B.S. Economics"  },
  { label: "School",   value: "University of Florida, Gainesville"   },
  { label: "Grad",     value: "May 2027"                             },
  { label: "Open to",  value: "Full-time · Graduate programs"        },
  { label: "Location", value: "Gainesville, FL (flexible)"           },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="section-label">About</div>

        <div ref={ref} className="reveal-block grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Bio paragraphs */}
          <div className="space-y-5 text-[0.9375rem] leading-[1.85] text-ink">
            {personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Quick-info table */}
          <div className="text-sm">
            {quickInfo.map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex gap-4 py-2.5 ${
                  i < quickInfo.length - 1 ? "border-b border-rule" : ""
                }`}
              >
                <span className="text-ink font-medium w-20 shrink-0">{label}</span>
                <span className="text-muted">{value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}