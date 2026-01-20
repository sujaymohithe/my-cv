import { ProjectCard } from "@/components/projects";
import { getProjects } from "@/lib";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
};

/**
 * A component that displays a list of projects, with featured projects
 * displayed first.
 *
 * The component renders a section with a heading and a paragraph of text,
 * followed by a grid of project cards. The project cards are rendered
 * using the ProjectCard component.
 * @returns A JSX element representing the projects section.
 */
export default async function Projects() {
  const projects = await getProjects();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4">
      {/* Projects Header */}
      <section>
        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Projects</h1>
        <p className="text-base leading-relaxed text-dark-gray">
          A collection of real-world systems I’ve designed and built across
          frontend platforms, real-time applications, and industrial systems.
        </p>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="border-t">
        <h2 className="my-6 text-2xl font-semibold">Other Projects</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} {...project} variant="other" />
          ))}
        </div>
      </section>
    </div>
  );
}
