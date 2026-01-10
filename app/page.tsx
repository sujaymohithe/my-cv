import { ProfileMain, ProfileProps } from "@/components/profile/ProfileMain";

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
    </div>
  );
}
