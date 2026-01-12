import { Chip, List } from "@/components/ui";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
}

/**
 * A component that displays a project card with a title, description, highlights, and tech stack.
 * @param props - The props for the component.
 * @param props.title - The title of the project.
 * @param props.description - The description of the project.
 * @param props.highlights - The highlights of the project.
 * @param props.stack - The tech stack of the project.
 * @returns - A JSX element representing the project card.
 */
export function ProjectCard({
  title,
  description,
  highlights,
  stack,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border p-6 transition hover:shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-base leading-relaxed text-secondary">
        {description}
      </p>

      <List items={highlights} ulClassName="space-y-2 text-sm" liClassName="gap-2"/>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Chip key={tech} name={tech} className="text-xs font-medium"/>
        ))}
      </div>
    </article>
  );
}
