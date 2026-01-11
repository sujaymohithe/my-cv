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
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Tech Stack
      </h2>

      <div className="space-y-8">
        {stacks.map((stack) => (
          <OverviewRow key={stack.title} title={stack.title}>
            <TechStackItem items={stack.items} />
          </OverviewRow>
        ))}
      </div>
    </section>
  );
}
