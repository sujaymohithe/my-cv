"use client";
import Link from "next/link";
import React from "react";

interface SmartLinkProps {
  href: string;
  children: React.ReactNode;
  download?: boolean | string;
  className?: string;
  isExternal?: boolean;
}

/**
 * A component that renders a link 
 * If the link is a download link, it renders a download link.
 * If the link is external, it renders an external link.
 * Otherwise, it renders an internal link using next/link.
 * @param props - The props for the component.
 * @param props.href - The href of the link.
 * @param props.children - The children of the link.
 * @param props.download - Whether the link is a download link or not.
 * @param props.className - Additional CSS classes for the link.
 * @param props.isExternal - Whether the link is external or not.
 * @returns - The JSX element representing the link.
 */
export function SmartLink({
  href,
  children,
  download,
  className,
  isExternal = false,
}: SmartLinkProps) {
  // Download Link
  if (download) {
    const downloadName = typeof download === "string" ? download : "";
    return (
      <a href={href} download={downloadName} className={className}>
        {children}
      </a>
    );
  }

  // External link
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  // Internal navigation
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
