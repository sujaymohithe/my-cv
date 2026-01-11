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

      <p className="mt-3 text-base leading-relaxed text-gray-600">
        {description}
      </p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {highlights.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
