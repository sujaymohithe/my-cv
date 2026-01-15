import { SmartLink } from "../ui";

export interface ContactCardProps {
  id: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  download?: boolean | string;
}

/**
 * A component that displays a contact card with a title, description, and link.
 * The link can be either internal or external.
 * @param props - The props for the component.
 * @param props.title The title of the contact card.
 * @param props.description The description of the contact card.
 * @param props.href The href of the contact card link.
 * @param props.download Whether the link is a download link or not.
 * @param props.external Whether the link is external or not.
 * @returns A JSX element representing the contact card.
 */
export function ContactCard({
  title,
  description,
  href,
  download,
  external = true,
}: ContactCardProps) {
  return (
    <SmartLink href={href} isExternal={external} download={download}>
      <div className="flex items-center justify-between gap-4 rounded-md border border-stroke px-4 py-3 text-contrast transition hover:border-stroke-hover">
        <span className="font-medium">{title}</span>
        <span className="truncate text-sm text-secondary">{description}</span>
      </div>
    </SmartLink>
  );
}
