import { cn } from "@/lib";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * A skeleton component that displays a gray, rounded, and pulsing box.
 * Useful for displaying loading states in a UI.
 * @param props - The props for the component.
 * @param props.className - Additional CSS classes for the component.
 * @returns A JSX element representing the skeleton.
 */
export function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
      <div className={cn("animate-pulse rounded bg-gray", className)}
      {...rest}
    />
  );
}
