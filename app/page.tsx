import {
  ProfessionalSummary,
  ProfileMain,
  TechCategories,
  HowIWork,
  CallToAction,
  TechCategoryProps,
  ProfileMainProps,
} from "@/components/profile";
import { FeaturedProjects } from "@/components/projects";
import { getProjects } from "@/lib";
import { Profile, TechCategory } from "@/schemas";

export const dynamic = "force-dynamic";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetches the profile data from the API and returns it as a Promise.
 * The promise resolves to a Profile object.
 * @throws {Error} If the API request fails.
 * @returns A promise that resolves to a Profile object.
 */
async function getProfile(): Promise<Profile> {
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }
  const res = await fetch(`${baseUrl}/api/profile/sujay_mohithe`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
}

/**
 * Maps Profile domain data to ProfileMain UI props.
 * The ProfileMain object is a subset of the Profile object,
 * containing only the name, designation, and first professional statement.
 * @param profile - The Profile object to map.
 * @returns - The mapped ProfileMain object.
 */
function mapProfileToProps(profile: Profile): ProfileMainProps {
  return {
    name: profile.name,
    designation: profile.designation,
    description: profile.professionalStatements[0] ?? "",
  };
}

/**
 * Maps an array of TechCategory domain data to an array of TechCategory UI props.
 * The input array is sorted by the order of each TechCategory, and then each TechCategory
 * is mapped to a TechCategoryProps object.
 * The TechCategoryProps object has a title equal to the name of the TechCategory,
 * and a techStacks array that is a sorted list of the names of the items in the TechCategory.
 * @param categorizedTechStacks - The array of TechCategory objects to map.
 * @returns - The mapped array of TechCategoryProps objects.
 */
function mapTechCategoriesToProps(
  categorizedTechStacks: TechCategory[],
): TechCategoryProps[] {
  return [...categorizedTechStacks]
    .sort((a, b) => a.order - b.order)
    .map((categorizedTechStack) => ({
      title: categorizedTechStack.name,
      techStacks: [...categorizedTechStack.items]
        .sort((a, b) => a.order - b.order)
        .map((item) => item.name),
    }));
}

/**
 * The Home component renders the main profile section
 * on the home page of the application.
 * @returns The JSX element representing the Home component.
 */
export default async function Home() {
  const profileData = await getProfile();
  const projects = await getProjects();

  const mainProfile = mapProfileToProps(profileData);
  const techStacks = mapTechCategoriesToProps(profileData.techStacks);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  const { professionalSummaries, workingPrinciples } = profileData;

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4">
      {/* Main Profile Section */}
      <ProfileMain {...mainProfile} />

      {/* Professional Summary Section */}
      <ProfessionalSummary highlights={professionalSummaries} />

      {/* Tech Stack Section */}
      <TechCategories categories={techStacks} />

      {/* Featured Projects Section */}
      <FeaturedProjects featuredProjects={featuredProjects} />

      {/* How I Work Section */}
      <HowIWork principles={workingPrinciples} />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
