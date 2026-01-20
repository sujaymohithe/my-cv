import { OverviewRow } from "@/components/ui";
import { TechStackItems } from "./TechStackItems";

export interface TechCategoryProps {
  title: string;
  techStacks: string[];
}

interface TechCategoriesProps {
  categories: TechCategoryProps[];
}

/**
 * Renders a list of tech stacks grouped into categories.
 * @param props - The props for the component.
 * @param props.categories - An array of objects containing the title and tech stacks for each category.
 * @returns A JSX element representing the list of tech stacks.
 */
export function TechCategories({ categories }: TechCategoriesProps) {
  return (
    <section>
      <div>
        <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-subtle-gray">
          Tech Stacks
        </h3>

        <div className="space-y-8">
          {categories.map((category) => (
            <OverviewRow key={category.title} title={category.title}>
              <TechStackItems items={category.techStacks} />
            </OverviewRow>
          ))}
        </div>
      </div>
    </section>
  );
}
