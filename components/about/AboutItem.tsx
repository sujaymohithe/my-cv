import { List } from "../ui";

interface AboutItemProps {
  title: string;
  content?: string;
  items?: string[];
}

/**
 * A component that displays a section with a title with content or list of items.
 * @param props The props for the component.
 * @param props.title The title of the section.
 * @param props.content The content of the section.
 * @param props.items An array of strings representing the items in the list.
 * @returns A JSX element representing the section.
 */
export function AboutItem({ title, content, items }: AboutItemProps) {
  return (
    <section>
      <div>
        <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
        {content && <p className="text-base text-dark-gray">{content}</p>}
        {items && <List items={items}></List>}
      </div>
    </section>
  );
}
