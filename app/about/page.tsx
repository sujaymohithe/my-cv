import { AboutItem } from "@/components/about";
import { getProfile } from "@/lib";

export const metadata = {
  title: "About Me",
};

/**
 * The About component renders a section with the title "About Me"
 * and a list of sections with title, content, and list of items.
 * It uses the AboutItem component to render each section.
 * @returns A JSX element representing the About component.
 */
export default async function About() {
  const profileData = await getProfile();
  const { aboutSections } = profileData;

  return (
    <div className="mx-auto max-w-5xl px-4">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">About Me</h1>

      <div className="space-y-8">
        {aboutSections.map((section) => (
          <AboutItem key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
}
