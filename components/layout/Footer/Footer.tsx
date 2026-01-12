import Link from "next/link";

/**
 * Footer component for the application
 * @returns The JSX element representing the Footer component
 */
export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-10 border-t border-stroke bg-light px-6">
      <div className="mx-auto flex h-full max-w-5xl flex-col items-center px-4 sm:flex-row sm:justify-between md:gap-4">
        <p className="text-sm text-subtle-gray">
          © {new Date().getFullYear()} Sujay Mohithe
        </p>

        <div className="flex gap-4 text-sm">
          <Link
            href="https://github.com/sujaymohithe"
            target="_blank"
            className="text-secondary hover:text-contrast"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/sujay-mohithe"
            target="_blank"
            className="text-secondary hover:text-contrast"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:sujaymohithe@gmail.com"
            className="text-secondary hover:text-contrast"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
