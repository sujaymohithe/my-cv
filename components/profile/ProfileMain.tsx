import Image from "next/image";
import { Button } from "../ui";

export interface ProfileProps {
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
export function ProfileMain({ name, designation, description }: ProfileProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hi, I&apos;m {name} 👋
          </h1>

          <h2 className="text-xl font-medium">{designation}</h2>

          <p className="max-w-xl text-base leading-relaxed text-secondary">
            {description}
          </p>

          <div className="flex gap-4 pt-4">
            <Button>Download CV</Button>
            <Button variant="ghost">View Projects</Button>
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
