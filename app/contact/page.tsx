import { ContactCard, ContactHeader } from "@/components/contact";
import { BASE_SOCIAL_LINKS } from "@/constants";

/**
 * A component that displays a contact page with a header and a card with contact information.
 * It renders a ContactHeader component with a title and description.
 * It also renders a ContactCard components with a title, description, and href.
 * @returns A JSX element representing the contact page.
 */
export default function Contact() {
  const contactLinks = BASE_SOCIAL_LINKS;
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="grid gap-8 md:grid-cols-[1fr_2px_1fr]">
        {/* Contact Header */}
        <ContactHeader />

        <div className="hidden bg-light-gray md:block" />

        {/* Contact Card */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">
            Contact Methods
          </h2>
          {contactLinks.map((link, index) => (
            <ContactCard {...link} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
}
