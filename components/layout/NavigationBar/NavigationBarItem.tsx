import Link from "next/link";
import { NavigationBarLink } from "./NavigationBar";

/**
 * Props for the Navigation Bar Item component
 */
interface NavigationBarItemProps {
  link: NavigationBarLink;
  className?: string;
  onClick?: () => void;
}

/**
 * Navigation Bar Item component
 * @param props
 * @param props.link Link to render
 * @param props.className Additional classes for the component
 * @param props.onClick Click event handler
 * @returns The JSX element representing the navigation bar item
 */
export function NavigationBarItem({
  link,
  className,
  onClick,
}: NavigationBarItemProps) {
  return (
    <Link href={link.href} onClick={onClick}>
      <li className={className}>{link.label}</li>
    </Link>
  );
}
