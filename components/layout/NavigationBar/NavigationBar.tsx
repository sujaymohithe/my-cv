"use client";
import { BASE_NAVIGATION_LINKS } from "@/constants";
import { NavigationBarItem } from "./NavigationBarItem";
import Link from "next/link";
import React from "react";
import { BurgerMenu } from "@/components/ui/Icons";
import { Button } from "@/components/ui";
import { NavigationSideBar } from "./NavigationSideBar";
import { cn } from "@/lib";

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
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const navLinks = BASE_NAVIGATION_LINKS;
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center bg-dark px-6 text-dark-contrast">
        <Link href="/">
          <h1 className="mr-20 text-2xl font-bold">Sujay Mohithe</h1>
        </Link>
        <ul className={cn("hidden items-center gap-12", "md:flex")}>
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

        <Button
          className={cn("ml-auto hover:bg-dark", "md:hidden")}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <BurgerMenu />
        </Button>
      </nav>

      {/* smaller viewport sidebar */}
      <NavigationSideBar
        open={sidebarOpen}
        links={navLinks}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}
