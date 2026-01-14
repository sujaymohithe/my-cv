import { Chip, List } from "@/components/ui";

type ProjectCardVariant = "featured" | "other";

interface ProjectCardProps {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  variant?: ProjectCardVariant;
}

/**
 * A component that displays a project card with a title, description, highlights, and tech stack.
 * @param props - The props for the component.
 * @param props.title - The title of the project.
 * @param props.description - The description of the project.
 * @param props.highlights - The highlights of the project.
 * @param props.stack - The tech stack of the project.
 * @param props.variant - The variant of the project card.
 * @returns - A JSX element representing the project card.
 */
export function ProjectCard({
  title,
  description,
  highlights,
  stack,
  variant = "featured",
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border p-6 transition hover:shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-3 text-base leading-relaxed text-dark-gray">
        {description}
      </p>

      {variant === "featured" && (
        <List
          items={highlights}
          ulClassName="space-y-2 text-sm"
          liClassName="gap-2"
        />
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Chip key={tech} name={tech} className="text-xs font-medium" />
        ))}
      </div>
    </article>
  );
}
