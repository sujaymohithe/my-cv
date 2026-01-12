import { BASE_NAVIGATION_LINKS } from "@/constants";
import { NavigationBarItem } from "./NavigationBarItem";

export interface NavigationBarLink {
  id: string;
  label: string;
  href: string;
}

/**
 * A navigation bar component that displays links to different parts of the website.
 *
 * Each link has a hover effect that changes the text color to primary.
 * @returns The JSX element representing the navigation bar.
 */
export function NavigationBar() {
  const navLinks = BASE_NAVIGATION_LINKS;
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center bg-dark px-6 text-dark-contrast">
      <h1 className="mr-20 text-2xl font-bold">Sujay Mohithe</h1>
      <ul className="flex items-center gap-12">
        {navLinks.map((link) => {
          return (
            <NavigationBarItem
              key={link.id}
              link={link}
              className="hover:text-primary"
            />
          );
        })}
      </ul>
    </nav>
  );
}
