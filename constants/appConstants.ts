import { ContactCardProps } from "@/components/contact";
import { NavigationBarLink } from "@/components/layout/NavigationBar";

export const APP_NAME = "Sujay Mohithe";
export const CV_NAME = "SujayMohithe_CV.pdf";

export const BASE_NAVIGATION_LINKS: NavigationBarLink[] = [
  {
    id: "Profile",
    label: "Profile",
    href: "/",
  },
  {
    id: "Experience",
    label: "Experience",
    href: "/experience",
  },
  {
    id: "Projects",
    label: "Projects",
    href: "/projects",
  },
  {
    id: "Contact",
    label: "Contact",
    href: "/contact",
  },
  {
    id: "About",
    label: "About",
    href: "/about",
  },
];

export const BASE_SOCIAL_LINKS: ContactCardProps[] = [
  {
    id: "email",
    title: "Email",
    description: "sujaymohithe@gmail.com",
    href: "mailto:sujaymohithe@gmail.com",
    external: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://linkedin.com/in/sujay-mohithe",
    external: true,
  },
  {
    id: "github",
    title: "GitHub",
    description: "View my open-source and side projects",
    href: "https://github.com/sujaymohithe",
    external: true,
  },
  {
    id: "cv",
    title: "Download CV",
    description: "Get a copy of my latest resume",
    href: "/cv.pdf",
    download: CV_NAME,
  },
];
