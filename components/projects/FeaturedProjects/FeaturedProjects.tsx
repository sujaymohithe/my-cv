import { projects } from "@/data";
import { ProjectCard } from "../ProjectCard";

/**
 * FeaturedProjects component renders a list of featured projects with their details.
 * @returns A JSX element representing the featured projects section.
 */
export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  return (
    <section>
      <div>
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-subtle-gray">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
