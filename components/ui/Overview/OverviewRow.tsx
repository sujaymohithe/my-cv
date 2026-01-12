import { cn } from "@/lib";

interface OverviewRowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A component that displays a row of content with a title and children.
 * @param props - The props for the component.
 * @param props.title - The title of the row.
 * @param props.children - The children of the row.
 * @param props.className - Additional CSS classes for the row.
 * @returns - A JSX element representing the row.
 */
export function OverviewRow({
  title,
  children,
  className,
}: OverviewRowProps) {
  return (
    <section className={cn("space-y-3", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-subtle-gray">
        {title}
      </h3>
      {children}
    </section>
  );
}
