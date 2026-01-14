import { Profile } from "@/types";

export const profile: Profile = {
  mainInfo: {
    name: "Sujay Mohithe",
    designation: "Senior Software Engineer (Frontend Focus)",
    description:
      "I build scalable, maintainable web applications with a strong focus on frontend architecture, performance, and developer experience.",
  },
  professionalSummary: {
    highlights: [
      "12+ years of experience building modern web applications",
      "Strong focus on frontend architecture and scalable UI patterns",
      "Experienced with React, Next.js, and TypeScript",
      "Built dashboards and data-driven user interfaces",
    ],
  },
  techStack: {
    stacks: [
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
    ],
  },
  howIWork: {
    principles: [
      "I focus on clean, maintainable component architecture.",
      "I design UIs with performance and accessibility in mind.",
      "I prefer simple, explicit solutions over clever abstractions.",
      "I collaborate closely with backend and product teams.",
    ],
  },
};
