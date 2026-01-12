import { ProjectCard } from "../ProjectCard";

/**
 * FeaturedProjects component renders a list of featured projects with their details.
 * @returns A JSX element representing the featured projects section.
 */
export function FeaturedProjects() {
  return (
    <section className="py-12">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-subtle-gray">
        Featured Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="SBOM Management Platform"
          description="A web-based platform for viewing and managing Software Bill of Materials (SBOM) across different products and environments."
          highlights={[
            "Built as a monorepo using Turborepo with separate admin and user portals",
            "Admin portal for managing SBOM uploads and metadata",
            "User portal for visualizing SBOM data and dependency relationships",
            "Interactive graph visualizations using Cytoscape",
            "Strong schema validation and type safety using Zod",
          ]}
          stack={[
            "Next.js (Pages Router)",
            "React",
            "Tailwind CSS",
            "TanStack Query",
            "Cytoscape",
            "Zod",
            "Auth0",
            "Turborepo",
          ]}
        />

        <ProjectCard
          title="Smart Cable Drums Monitoring System"
          description="An industrial IoT application for monitoring cable length usage from cable drums using sensor-based detection and real-time updates."
          highlights={[
            "Automatic detection of cable length pulled from cable drums using sensors",
            "Sensor data transmitted to a gateway and forwarded to the backend",
            "Real-time frontend updates via WebSocket messages",
            "Live visualization of cable length changes in the UI",
            "Integrated enterprise authentication via SAP",
          ]}
          stack={[
            "React",
            "Tailwind CSS",
            "WebSockets",
            "Django REST API",
            "SAP Authentication",
            "Industrial IoT",
          ]}
        />
      </div>
    </section>
  );
};
