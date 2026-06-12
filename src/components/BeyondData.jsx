import { beyondData } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function BeyondDataCard({ icon, title, description }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal-block bg-white border border-rule p-6 hover:border-sage transition-colors duration-200"
    >
      <div className="text-2xl text-sage mb-4">{icon}</div>

      <h3 className="font-display text-xl text-ink mb-3">
        {title}
      </h3>

      <p className="text-sm text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function BeyondData() {
  return (
    <section id="beyond-data" className="py-24 border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="section-label">Beyond Data</div>

        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-5">
            A little more about how I think, create, and recharge.
          </h2>

          <p className="text-muted leading-relaxed">
            Outside of analytics, I’m drawn to creative and detail-oriented
            activities that shape how I approach problem solving: with
            curiosity, patience, and an eye for clarity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {beyondData.map((item) => (
            <BeyondDataCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}