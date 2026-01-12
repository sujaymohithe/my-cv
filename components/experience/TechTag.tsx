import { Chip } from "../ui";

interface TechTagProps {
  name: string;
}

/**
 * TechTag component renders a tech tag with a given name.
 * @param props - The props for the component.
 * @param props.name - The name of the tech.
 * @returns - A JSX element representing the tech tag.
 */
export function TechTag({ name }: TechTagProps) {
  return <Chip name={name} />;
}
