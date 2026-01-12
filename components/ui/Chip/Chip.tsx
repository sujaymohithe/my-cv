import { cn } from "@/lib";

interface ChipProps {
  className?: string;
  name: string;
}

/**
 * A component that displays a chip with a given name.
 * The chip is a small, rounded rectangle with a gray background and dark gray text.
 * The text is centered and has a small font size.
 * An optional className can be provided to customize the chip's style.
 * @param props - The props for the component.
 * @param props.className - The optional className for the chip.
 * @param props.name - The name of the chip.
 * @returns - The JSX element representing the chip.
 */
export function Chip({ className, name }: ChipProps) {
  return (
    <span
      className={cn(
        "rounded-full bg-light-gray px-2 py-1 text-sm text-dark-gray",
        className,
      )}
    >
      {name}
    </span>
  );
}
