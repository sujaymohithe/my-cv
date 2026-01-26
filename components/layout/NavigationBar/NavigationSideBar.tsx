"use client";
import { Button } from "@/components/ui";
import { NavigationBarLink } from "./NavigationBar";
import { Close } from "@/components/ui/Icons";
import { NavigationBarItem } from "./NavigationBarItem";

interface MobileSidebarProps {
  open: boolean;
  links: NavigationBarLink[];
  onClose: () => void;
}

/**
 * A component that displays a mobile sidebar with a list of links and a close button.
 * When the sidebar is open, it renders a dark background that covers the entire screen.
 * When the sidebar is closed, it renders nothing.
 * @param props - The props for the component.
 * @param props.open Whether the sidebar is open or not.
 * @param props.links An array of NavigationBarLink objects representing the links in the sidebar.
 * @param props.onClose A function to call when the close button is clicked.
 * @returns A JSX element representing the mobile sidebar.
 */
export function NavigationSideBar({
  open,
  links,
  onClose,
}: MobileSidebarProps) {
  return (
    <>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-dark text-dark-contrast 
            transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end px-6 py-4">
          <Button className="ml-auto hover:bg-dark" onClick={onClose}>
            <Close />
          </Button>
        </div>

        <ul className="mt-4 flex flex-col gap-6 px-6">
          {links.map((link) => (
            <NavigationBarItem
              key={link.id}
              link={link}
              className="hover:text-primary"
              onClick={onClose}
            />
          ))}
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />
      )}
    </>
  );
}
