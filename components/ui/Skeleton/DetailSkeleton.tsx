import { Skeleton } from "./Skeleton";

/**
 * A skeleton component that displays a detailed view with multiple skeleton elements.
 * Useful for displaying loading states in a detail view.
 * @returns A JSX element representing the detailed skeleton.
 */
export function DetailSkeleton() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4">
      <Skeleton className="h-6 w-1/3"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
      <div className="flex gap-2">
        <Skeleton className="h-8 w-16 rounded-full"></Skeleton>
        <Skeleton className="h-8 w-16 rounded-full"></Skeleton>
        <Skeleton className="h-8 w-16 rounded-full"></Skeleton>
      </div>
      <Skeleton className="h-6 w-full"></Skeleton>
      <Skeleton className="h-6 w-full"></Skeleton>
      <Skeleton className="h-6 w-full"></Skeleton>
      <div className="space-y-4">
        <Skeleton className="h-6 w-full"></Skeleton>
        <Skeleton className="h-6 w-full"></Skeleton>
        <Skeleton className="h-6 w-full"></Skeleton>
      </div>
    </div>
  );
}
