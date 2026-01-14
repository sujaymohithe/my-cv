import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sbom",
    title: "SBOM Management Platform",
    description:
      "A web-based platform for viewing and managing Software Bill of Materials (SBOM).",
    highlights: [
      "Built as a monorepo using Turborepo with separate admin and user portals",
      "Admin portal for managing SBOM uploads and metadata",
      "User portal for visualizing SBOM data and dependency relationships",
      "Interactive graph visualizations using Cytoscape",
      "Strong schema validation and type safety using Zod",
    ],
    stack: [
      "Next.js (Pages Router)",
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Cytoscape",
      "Zod",
      "Auth0",
      "Turborepo",
    ],
    featured: true,
  },
  {
    id: "smart-cable-drums",
    title: "Smart Cable Drums Monitoring System",
    description:
      "An industrial IoT application for monitoring cable length usage from cable drums using sensor-based detection and real-time updates.",
    highlights: [
      "Automatic detection of cable length pulled from cable drums using sensors",
      "Sensor data transmitted to a gateway and forwarded to the backend",
      "Real-time frontend updates via WebSocket messages",
      "Live visualization of cable length changes in the UI",
      "Integrated enterprise authentication via SAP",
    ],
    stack: [
      "Angular",
      "Tailwind CSS",
      "WebSockets",
      "Django REST API",
      "SAP Authentication",
      "Industrial IoT",
    ],
    featured: true,
  },
  {
    id: "inverter-dashboard",
    title: "Inverter Monitoring & Control Dashboard",
    description:
      "A real-time dashboard for monitoring and controlling industrial inverters, providing live status, metrics, and command execution through a backend that interfaces with inverter daemons via DBUS.",
    highlights: [
      "Real-time monitoring of inverter parameters such as voltage, current, power, and status",
      "Backend interaction with inverter daemons using DBUS method calls",
      "Live data updates pushed to the frontend for near real-time visualization",
      "User-triggered control actions (start, stop, reset, configuration updates)",
      "Simulation support for testing inverter behavior without physical hardware",
    ],
    stack: [
      "Angular",
      "Tailwind CSS",
      "WebSockets / Real-time APIs",
      "Backend Service (DBUS integration)",
      "Linux / Embedded Environment",
      "Industrial Automation",
    ],
    featured: true,
  },
  {
    id: "ptos-ai-navigation",
    title: "PTOS – AI-Based Navigation & Decision Support Tool",
    description:
      "An AI-powered navigation and decision-support system for cancer patients designed to assist doctors and operators in navigating complex process flows by providing contextual guidance, recommendations, and intelligent insights.",
    highlights: [
      "AI-driven navigation through complex operational workflows",
      "Context-aware recommendations based on system state and user actions",
      "Interactive UI guiding users step-by-step through processes",
      "Reduction of operator errors through intelligent hints and validations",
      "Scalable architecture to support multiple processes and use cases",
    ],
    stack: [
      "React",
      "SCSS",
      "AI / Machine Learning Models",
      "REST APIs",
      "Backend Decision Engine",
      "Industrial Automation",
    ],
    featured: false,
  },
];
