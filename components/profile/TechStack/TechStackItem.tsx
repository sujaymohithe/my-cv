interface TechStackItemProps {
  items: string[];
}

/**
 * TechStackItem displays a horizontal list of technologies
 * @param props The props for the component
 * @param props.items The list of technologies
 * @returns A JSX element representing the tech stack
 */
export function TechStackItem({ items }: TechStackItemProps) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2 text-base text-gray-700">
      {items.map((item) => (
        <span key={item} className="whitespace-nowrap">
          {item}
        </span>
      ))}
    </div>
  );
}
