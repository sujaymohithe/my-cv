import { List } from "@/components/ui";

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
    <section>
      <div>
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-subtle-gray">
          {title}
        </h3>

        <List items={highlights} />
      </div>
    </section>
  );
}
