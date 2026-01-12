import React, { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

/**
 * A component that displays a timeline of experience.
 * @param props - The props for the component.
 * @param props.children - The children of the component.
 * @returns - A JSX element representing the timeline.
 */
export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative ml-4 border-l-2 border-light-gray">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="relative mb-8">
          {child}
        </div>
      ))}
    </div>
  );
}
