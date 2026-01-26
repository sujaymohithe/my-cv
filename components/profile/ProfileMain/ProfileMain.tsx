import Image from "next/image";
import { Button, SmartLink } from "@/components/ui";
import { APP_NAME, CV_NAME } from "@/constants";
import { cn } from "@/lib";

export interface ProfileMainProps {
  name: string;
  designation: string;
  description?: string;
}

/**
 * A component that displays a profile with main profile details like name, designation, and description.
 * It also includes two buttons: "Download CV" and "View Projects".
 * @param props - The props for the component.
 * @param props.name - The name of the profile.
 * @param props.designation - The designation of the profile.
 * @param props.description - The description of the profile.
 * @returns - The JSX element representing the profile.
 */
export function ProfileMain({
  name,
  designation,
  description,
}: ProfileMainProps) {
  return (
    <section>
      <div
        className={cn(
          "flex flex-col-reverse items-start gap-8",
          "md:flex-row md:items-center md:justify-between",
        )}
      >
        <div className="flex-1 space-y-4">
          <h1
            className={cn("text-3xl font-bold tracking-tight", "sm:text-4xl")}
          >
            Hi, I&apos;m {APP_NAME} 👋
          </h1>

          <h2 className="text-2xl font-semibold">{designation}</h2>

          <p className="max-w-xl text-base leading-relaxed text-dark-gray">
            {description}
          </p>

          <div className="flex gap-4 pt-4">
            <Button asChild>
              <SmartLink href="./cv.pdf" download={CV_NAME}>
                Download CV
              </SmartLink>
            </Button>
            <Button asChild variant="ghost">
              <SmartLink href="/projects">View Projects</SmartLink>
            </Button>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src="/profile.jpeg"
            alt={`${name} - ${designation}`}
            width={160}
            height={160}
            priority
            className="rounded-full border bg-background shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
