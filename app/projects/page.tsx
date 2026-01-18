import { ProjectCard } from "@/components/projects/ProjectCard";
import { Project } from "@prisma/client";

export const dynamic = "force-dynamic";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "Projects",
};

/**
 * Fetches the list of projects from the API and returns them as a Promise.
 * @returns - A promise that resolves to a list of projects.
 * @throws {Error} If the API request fails.
 */
async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

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
          {otherProjects.map((p) => (
            <ProjectCard key={p.title} {...p} variant="other" />
          ))}
        </div>
      </section>
    </div>
  );
}
