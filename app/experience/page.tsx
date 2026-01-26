import {
  ExperienceItem,
  ExperienceItemProps,
  Timeline,
} from "@/components/experience";
import { cn } from "@/lib";
import { Experience as ExperienceSchema } from "@/schemas";

export const metadata = {
  title: "Experience",
};

export const dynamic = "force-dynamic";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetches the experience data from the API and returns it as a Promise.
 * The promise resolves to an Experience object.
 * @throws {Error} If the API request fails.
 * @returns A promise that resolves to an Experience object.
 */
async function getExperience(): Promise<ExperienceSchema[]> {
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }
  const res = await fetch(`${baseUrl}/api/experience`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch experience");
  }
  return res.json();
}

/**
 * Maps an array of Experience objects to an array of ExperienceItemProps objects.
 * The resulting ExperienceItemProps objects contain the year range, role, company, tech stacks, and highlights
 * of the original Experience objects.
 * @param experiences - The array of Experience objects to map.
 * @returns - The mapped array of ExperienceItemProps objects.
 */
function mapExperiencesToProps(
  experiences: ExperienceSchema[],
): ExperienceItemProps[] {
  return experiences.map((experience) => ({
    yearRange: `${experience.startYear}–${experience.endYear || "Present"}`,
    role: experience.role,
    company: experience.company,
    techStacks: experience.stacks,
    points: experience.highlights.map((highlight) => highlight.text),
  }));
}

/**
 * The Experience page component displays a timeline of work experience.
 * @returns A JSX element representing the experience page.
 */
export default async function Experience() {
  const response = await getExperience();
  const experiences = mapExperiencesToProps(response);

  return (
    <div className="mx-auto max-w-5xl px-4">
      <h1 className={cn("mb-8 text-3xl font-bold", "sm:text-4xl")}>Experience</h1>

      {experiences.map((experience) => (
        <Timeline key={experience.company}>
          <ExperienceItem {...experience} />
        </Timeline>
      ))}
    </div>
  );
}
