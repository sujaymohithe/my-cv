import { List } from "@/components/ui";
import { cn } from "@/lib";

interface HowIWorkProps {
  principles: string[];
}

/**
 * A component that displays a list of principles with how I work.
 * @param props - The props for the component.
 * @param props.principles - An array of strings representing the principles.
 * @returns A JSX element representing the how I work section.
 */
export function HowIWork({ principles }: HowIWorkProps) {
  return (
    <section>
      <div>
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-subtle-gray">
          How I Work
        </h2>

        <List
          ulClassName={cn("grid gap-6 space-y-0", "sm:grid-cols-2")}
          liClassName="rounded-lg border p-5"
          items={principles}
          hideBullet
        />
      </div>
    </section>
  );
}
