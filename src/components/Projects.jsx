import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="section-label">Projects</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}