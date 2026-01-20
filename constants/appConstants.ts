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

export const DOWNLOAD_CV_CONTACT_METHOD: ContactCardProps = {
  id: "cv",
  title: "DOWNLOAD CV",
  description: "Get a copy of my latest resume",
  href: "/cv.pdf",
  download: CV_NAME,
};
