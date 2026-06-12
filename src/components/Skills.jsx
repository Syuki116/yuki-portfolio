import { skills } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="section-label">Skills</div>

        <div ref={ref} className="reveal-block grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-sage mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-[0.8125rem] bg-surface border border-rule text-ink px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}