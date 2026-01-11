import { Button } from "@/components/ui";
import Link from "next/link";

interface CallToActionProps {
  title?: string;
  description?: string;
}

/**
 * A call to action component with a title, description, and two buttons: "Contact Me" and "Download CV".
 * @param props - The props for the component.
 * @param props.title - The title of the call to action.
 * @param props.description - The description of the call to action.
 * @returns - A JSX element representing the call to action.
 */
export function CallToAction ({
  title = "Interested in working together?",
  description = "Feel free to reach out or download my CV.",
} : CallToActionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-base text-gray-600">{description}</p>

      <div className="mt-8 flex justify-center gap-4">
        <Button asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
        <Button asChild variant="ghost">
          <a href="/cv.pdf" download>
            Download CV
          </a>
        </Button>
      </div>
    </section>
  );
};
