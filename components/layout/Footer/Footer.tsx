import { SmartLink } from "@/components/ui";
import { GitHub } from "@/components/ui/Icons";
import { APP_NAME, PROJECT_NAME } from "@/constants";
import { cn, getContacts } from "@/lib";
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
    <footer
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-stroke bg-light px-6",
        "md:h-12",
        "lg:h-10",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4",
          "sm:flex-row sm:justify-between",
        )}
      >
        <div
          className={cn(
            "flex flex-1 items-center justify-center gap-2 text-sm text-subtle-gray",
            "sm:justify-start",
          )}
        >
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

        <div className={cn("flex flex-1 items-center gap-4 text-sm", "sm:justify-end")}>
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
