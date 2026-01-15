import { Button, SmartLink } from "@/components/ui";
import { CV_NAME } from "@/constants";

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
export function CallToAction({
  title = "Interested in working together?",
  description = "Feel free to reach out or download my CV.",
}: CallToActionProps) {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-4 text-base text-dark-gray">{description}</p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <SmartLink href="/contact">Contact Me</SmartLink>
          </Button>
          <Button asChild variant="ghost">
            <SmartLink href="./cv.pdf" download={CV_NAME}>
              Download CV
            </SmartLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
