import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProjectCard({
  domain,
  title,
  org,
  description,
  tags,
  link,
}) {
  const ref = useScrollReveal();
  const hasLink = link && link !== "#";

  return (
    <article
      ref={ref}
      className="reveal-block group flex flex-col bg-white border border-rule p-8 hover:-translate-y-1 hover:border-sage transition-all duration-200"
    >
      <span className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-sage mb-3">
        {domain}
      </span>

      <h3 className="font-display text-[1.05rem] leading-snug text-ink mb-2">
        {title}
      </h3>

      <p className="text-xs text-muted italic mb-4">{org}</p>

      <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.72rem] bg-surface border border-rule text-ink px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {hasLink ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted border-b border-rule pb-px self-start group-hover:text-sage group-hover:border-sage transition-colors duration-150"
        >
          View Project ↗
        </a>
      ) : (
        <span className="text-xs text-rule self-start select-none">
          Code available on request
        </span>
      )}
    </article>
  );
}