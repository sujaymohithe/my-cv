"use client";
import { cn } from "@/lib";
import React from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  asChild?: boolean;
}

/**
 * A button component with a default primary variant and an optional left icon.
 * @param props The props for the button.
 * @param props.variant  The variant of the button.
 * @param props.leftIcon The left icon of the button.
 * @param props.className Additional CSS classes for the button.
 * @param props.children  The children of the button.
 * @param props.asChild  Whether to render the button as a child element.
 * @returns - A JSX element representing the button.
 */
export function Button({
  variant = "primary",
  leftIcon,
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-medium transition",
    variant === "primary" && "bg-dark text-dark-contrast hover:bg-dark-hover",
    variant === "ghost" &&
      "border border-stroke text-contrast hover:border-stroke-hover",
    className,
  );

  // If asChild is true and children is a valid React element, clone it.
  // Instead of rendering a button, render the child element for example a link as a button
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      className?: string;
    }>;

    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  // Otherwise render a regular button
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-5 py-2 text-sm font-medium transition",
        variant === "primary" &&
          "bg-dark text-dark-contrast hover:bg-dark-hover",
        variant === "ghost" &&
          "border border-stroke text-contrast hover:border-stroke-hover",
        className,
      )}
      {...props}
    >
      {leftIcon}
      {children}
    </button>
  );
}
