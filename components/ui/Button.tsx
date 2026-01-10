"use client";
import { cn } from "@/lib";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
}

/**
 * A button component with a default primary variant and an optional left icon.
 * @param props The props for the button.
 * @param props.variant  The variant of the button.
 * @param props.leftIcon The left icon of the button.
 * @param props.className Additional CSS classes for the button.
 * @param props.children  The children of the button.
 * @returns - A JSX element representing the button.
 */
export function Button({
  variant = "primary",
  leftIcon,
  className,
  children,
  ...props
}: ButtonProps) {
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
