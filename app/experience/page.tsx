import { ExperienceItem, Timeline } from "@/components/experience";

export const metadata = {
  title: "Experience",
};

/**
 * The Experience page component displays a timeline of work experience.
 * @returns A JSX element representing the experience page.
 */
export default function Experience() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Experience</h1>

      <Timeline>
        <ExperienceItem
          yearRange="2022–Present"
          role="Senior Software Engineer"
          company="Company"
          techs={["React", "FastAPI", "DBUS"]}
          points={[
            "Designed simulation backend",
            "Built monitoring dashboards",
          ]}
        />

        <ExperienceItem
          yearRange="2019–2022"
          role="Software Engineer"
          company="Company"
          techs={["Angular", "Node.js"]}
          points={["Developed UI platforms"]}
        />

        <ExperienceItem yearRange="2017–2019" role="Junior Engineer" />
      </Timeline>
    </div>
  );
}
