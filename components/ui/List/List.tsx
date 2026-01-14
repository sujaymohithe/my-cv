import { cn } from "@/lib";
import React from "react";

interface ListProps {
  items: React.ReactNode[];
  ulClassName?: string;
  liClassName?: string;
  hideBullet?: boolean;
}

/**
 * A component that displays a list of items with a bullet point.
 * @param props - The props for the component.
 * @param props.items - The list of items to display.
 * @param props.ulClassName - Additional CSS classes for the ul element.
 * @param props.liClassName - Additional CSS classes for the li element.
 * @param props.hideBullet - Whether to hide the bullet point.
 * @returns - A JSX element representing the list.
 */
export function List({
  items,
  ulClassName,
  liClassName,
  hideBullet = false,
}: ListProps) {
  return (
    <ul className={cn("space-y-4 text-base", ulClassName)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            "flex gap-3 leading-relaxed text-dark-gray",
            liClassName,
          )}
        >
          {!hideBullet && (
            <span
              className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gray"
              aria-hidden
            />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
