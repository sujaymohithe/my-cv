import { cn } from "@/lib";
import { ProjectCard } from "../ProjectCard";
import { Project } from "../types";

interface FeaturedProjectsProps {
  featuredProjects: Project[];
}

/**
 * FeaturedProjects component renders a list of featured projects with their details.
 * @param props - The props for the component.
 * @param props.featuredProjects - The list of featured projects to display.
 * @returns A JSX element representing the featured projects section.
 */
export function FeaturedProjects({ featuredProjects }: FeaturedProjectsProps) {
  return (
    <section>
      <div>
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-subtle-gray">
          Featured Projects
        </h2>

        <div className={cn("grid gap-6", "md:grid-cols-2")}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
