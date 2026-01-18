import {
  ProfessionalSummary,
  ProfileMain,
  TechStack,
  HowIWork,
  CallToAction,
} from "@/components/profile";
import { FeaturedProjects } from "@/components/projects";
import { profile } from "@/data";

/**
 * The Home component renders the main profile section
 * on the home page of the application.
 * @returns The JSX element representing the Home component.
 */
export default function Home() {
  const { mainInfo, professionalSummary, techStack, howIWork } = profile;

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4">
      {/* Main Profile Section */}
      <ProfileMain {...mainInfo} />

      {/* Professional Summary Section */}
      <ProfessionalSummary highlights={professionalSummary.highlights} />

      {/* Tech Stack Section */}
      <TechStack stacks={techStack.stacks} />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* How I Work Section */}
      <HowIWork principles={howIWork.principles} />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
