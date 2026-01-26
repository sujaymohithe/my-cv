import { cn } from "@/lib";
import { Skeleton } from "./Skeleton";

/**
 * A skeleton component that displays a grid of two columns with
 * a maximum width of 1200px. Each column contains two skeleton
 * elements with different heights and widths.
 *
 * The component is useful for displaying loading states in a grid
 * layout.
 * @returns A JSX element representing the grid skeleton.
 */
export function GridSkeleton() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4">
      <Skeleton className="h-6 w-1/3"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
      <div className={cn("grid gap-6", "md:grid-cols-2")}>
        <div className="h-[500px] space-y-16 rounded-lg border border-light-gray p-6">
          <Skeleton className="h-6 w-1/3"></Skeleton>
          <Skeleton className="h-4 w-full"></Skeleton>
        </div>
        <div className="h-[500px] space-y-16 rounded-lg border border-light-gray p-6">
          <Skeleton className="h-6 w-1/3"></Skeleton>
          <Skeleton className="h-4 w-full"></Skeleton>
        </div>
      </div>
    </div>
  );
}
