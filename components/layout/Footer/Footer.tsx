import { SmartLink } from "@/components/ui";
import { GitHub } from "@/components/ui/Icons";
import { APP_NAME, PROJECT_NAME } from "@/constants";
import { getContacts } from "@/lib";
import Link from "next/link";

const Dot = () => <span className="leading-none">•</span>;

/**
 * Footer component for the application
 * @returns The JSX element representing the Footer component
 */
export async function Footer() {
  const footerLinks = await getContacts();
  const GitHubLink = footerLinks.find((link) => link.type === "GITHUB");

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-12 border-t border-stroke bg-light px-6 sm:h-10">
      <div className="mx-auto mt-[2px] flex h-full max-w-5xl flex-col items-center px-4 sm:flex-row sm:justify-between md:gap-4">
        <div className="flex items-center justify-center gap-2 text-sm text-subtle-gray">
          <p>
            © {new Date().getFullYear()} {APP_NAME}
          </p>
          <Dot />
          <p>Built with Next.js</p>
          {PROJECT_NAME && GitHubLink?.value && (
            <>
              <Dot />
              <SmartLink
                href={`${GitHubLink?.value}/${PROJECT_NAME}`}
                isExternal
              >
                <GitHub className="hover:text-contrast" />
              </SmartLink>
            </>
          )}
        </div>

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
