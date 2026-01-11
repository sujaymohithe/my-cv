export interface ProfessionalSummaryProps {
  title?: string;
  highlights: string[];
}

/**
 * A component that displays a professional summary with a title and list of highlights.
 * @param props - The props for the component.
 * @param props.title - The title of the professional summary.
 * @param props.highlights - The list of highlights to display.
 * @returns - A JSX element representing the professional summary.
 */
export function ProfessionalSummary({
  title = "Professional Summary",
  highlights,
}: ProfessionalSummaryProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </h3>

      <ul className="space-y-4">
        {highlights.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 text-base leading-relaxed text-gray-700"
          >
            <span
              className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gray-400"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
