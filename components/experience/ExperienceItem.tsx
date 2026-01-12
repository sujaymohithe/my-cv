import { List } from "../ui";
import { TechTag } from "./TechTag";

interface ExperienceItemProps {
  yearRange: string;
  role: string;
  company?: string;
  techs?: string[];
  points?: string[];
}

/**
 * A component that displays an experience item with a year range, role, company, tech tags, and bullet points.
 * @param props - The props for the component.
 * @param props.yearRange - The year range of the experience item.
 * @param props.role - The role of the experience item.
 * @param props.company - The company of the experience item.
 * @param props.techs - The tech tags of the experience item.
 * @param props.points - The bullet points of the experience item.
 * @returns A JSX element representing the experience item.
 */
export function ExperienceItem({
  yearRange,
  role,
  company,
  techs = [],
  points = [],
}: ExperienceItemProps) {
  return (
    <div className="relative pl-6">
      <span className="absolute -left-4 top-1 h-3 w-3 rounded-full bg-accent"></span>

      <div className="mb-2 font-semibold text-dark-gray">{yearRange}</div>
      <div className="text-lg font-bold">
        {role}{" "}
        {company && <span className="text-subtle-gray">– {company}</span>}
      </div>

      <div className="mb-2 mt-1 flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>

      {points.length > 0 && (
        <>
          <List items={points} ulClassName="space-y-2 text-sm" liClassName="gap-2"/>
        </>
      )}
    </div>
  );
}
