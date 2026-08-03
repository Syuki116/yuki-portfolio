import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ProjectCard({
  domain,
  title,
  org,
  description,
  tags,
  link,
  linkLabel,
  secondaryLink,
  secondaryLinkLabel,
  image,
}) {
  const ref = useScrollReveal();
  const hasLink = link && link !== "#";
  const hasSecondaryLink = secondaryLink && secondaryLink !== "#";

  return (
    <article
      ref={ref}
      className="reveal-block group flex flex-col bg-white border border-rule p-8 hover:-translate-y-1 hover:border-sage transition-all duration-200"
    >
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-48 object-cover border border-rule mb-5"
        />
      )}

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

      <div className="flex flex-wrap gap-4">
        {hasLink && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted border-b border-rule pb-px self-start hover:text-sage hover:border-sage transition-colors duration-150"
          >
            {linkLabel || "View Project"}
          </a>
        )}

        {hasSecondaryLink && (
          <a
            href={secondaryLink}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted border-b border-rule pb-px self-start hover:text-sage hover:border-sage transition-colors duration-150"
          >
            {secondaryLinkLabel || "View App"}
          </a>
        )}

        {!hasLink && !hasSecondaryLink && (
          <span className="text-xs text-rule self-start select-none">
            Code available on request
          </span>
        )}
      </div>
    </article>
  );
}