import { APP_NAME } from "@/constants";
import { getContacts } from "@/lib/api/contact";
import Link from "next/link";

/**
 * Footer component for the application
 * @returns The JSX element representing the Footer component
 */
export async function Footer() {
  const footerLinks = await getContacts();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-10 border-t border-stroke bg-light px-6">
      <div className="mx-auto flex h-full max-w-5xl flex-col items-center px-4 sm:flex-row sm:justify-between md:gap-4">
        <p className="text-sm text-subtle-gray">
          © {new Date().getFullYear()} {APP_NAME}
        </p>

        <div className="flex gap-4 text-sm">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-contrast"
            >
              {link.type}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
