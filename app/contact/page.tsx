import {
  ContactCard,
  ContactCardProps,
  ContactHeader,
} from "@/components/contact";
import { DOWNLOAD_CV_CONTACT_METHOD } from "@/constants";
import { getContacts } from "@/lib";
import { Contact as ContactSchema } from "@/schemas";

export const metadata = {
  title: "Contact Me",
};

export const dynamic = "force-dynamic";

/**
 * Maps an array of Contact objects to an array of ContactCardProps objects.
 * The ContactCardProps objects contain the id, title, description, href, external, and download properties.
 * @param contacts - The array of Contact objects to map.
 * @returns - The mapped array of ContactCardProps objects.
 */
function mapContactsToProps(contacts: ContactSchema[]): ContactCardProps[] {
  return contacts.map((contact) => ({
    id: contact.id,
    title: contact.type,
    description: contact.label ?? "",
    href: contact.value,
    external: true,
    download: false,
  }));
}

/**
 * A component that displays a contact page with a header and a card with contact information.
 * It renders a ContactHeader component with a title and description.
 * It also renders a ContactCard components with a title, description, and href.
 * @returns A JSX element representing the contact page.
 */
export default async function Contact() {
  const response = await getContacts();
  const contacts = mapContactsToProps(response);

  const downloadCVContact = DOWNLOAD_CV_CONTACT_METHOD;

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="grid gap-8 md:grid-cols-[1fr_2px_1fr]">
        {/* Contact Header */}
        <ContactHeader />

        <div className="hidden bg-light-gray md:block" />

        {/* Contact Card */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Contact Methods</h2>
          {contacts.map((contact) => (
            <ContactCard {...contact} key={contact.id} />
          ))}
          {downloadCVContact && <ContactCard {...downloadCVContact} />}
        </section>
      </div>
    </div>
  );
}
