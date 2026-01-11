import {
  ProfessionalSummary,
  ProfileMain,
  ProfileProps,
  TechStack,
  HowIWork,
  CallToAction,
} from "@/components/profile";
import { FeaturedProjects } from "@/components/projects";

const profileData: ProfileProps = {
  name: "Sujay Mohithe",
  designation: "Frontend Developer",
  description:
    "I build scalable web applications and dashboards with React, Next.js, and modern frontend tooling",
};

/**
 * The Home component renders the main profile section
 * on the home page of the application.
 * @returns The JSX element representing the Home component.
 */
export default function Home() {
  return (
    <div className="container py-4">
      <ProfileMain
        name={profileData.name}
        designation={profileData.designation}
        description={profileData.description}
      />
      <ProfessionalSummary
        highlights={[
          "7+ years of experience building modern web applications",
          "Strong focus on frontend architecture and scalable UI patterns",
          "Experienced with React, Next.js, and TypeScript",
          "Built dashboards and data-driven user interfaces",
        ]}
      />
      <TechStack
        stacks={[
          {
            title: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          },
          {
            title: "State & Data",
            items: ["TanStack Query", "REST APIs", "Zod"],
          },
          {
            title: "Tooling",
            items: ["Git", "Vite", "ESLint", "CI/CD"],
          },
        ]}
      />

      <FeaturedProjects />

      <HowIWork
        principles={[
          "I focus on clean, maintainable component architecture.",
          "I design UIs with performance and accessibility in mind.",
          "I prefer simple, explicit solutions over clever abstractions.",
          "I collaborate closely with backend and product teams.",
        ]}
      />

      <CallToAction />
    </div>
  );
}
