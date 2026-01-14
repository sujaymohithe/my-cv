import { OverviewRow } from "@/components/ui";
import { TechStackItem } from "./TechStackItem";

export interface TechStackProps {
  stacks: {
    title: string;
    items: string[];
  }[];
}

/**
 * A component that displays a list of tech stacks with their items.
 * @param props - The props for the component.
 * @param props.stacks - An array of tech stacks with their items.
 * @returns - A JSX element representing the tech stacks.
 */
export function TechStack({ stacks }: TechStackProps) {
  return (
    <section>
      <div>
        <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-subtle-gray">
          Tech Stack
        </h3>

        <div className="space-y-8">
          {stacks.map((stack) => (
            <OverviewRow key={stack.title} title={stack.title}>
              <TechStackItem items={stack.items} />
            </OverviewRow>
          ))}
        </div>
      </div>
    </section>
  );
}
