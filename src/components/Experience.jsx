import { experience } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function TimelineItem({ date, org, role, description }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal-block grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-y-1 gap-x-10"
    >
      <div className="flex sm:flex-col gap-4 sm:gap-1 pt-0.5">
        <span className="text-sm text-muted">{date}</span>
        <span className="text-sm text-sage font-medium">{org}</span>
      </div>
      <div>
        <h3 className="text-[0.9375rem] font-medium text-ink mb-1.5">{role}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="section-label">Experience &amp; Education</div>

        <div className="flex flex-col gap-10">
          {experience.map((item) => (
            <TimelineItem key={item.role} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}