import React from "react";
import { IconProps } from "./types";

/**
 * Close icon
 * @param props Props
 * @param props.className Class name for the icon
 * @param props.color Color of the icon
 * @param props.size Size of the icon
 * @returns JSX element representing the icon
 */
export function Close({
  className = "",
  color = "currentColor",
  size = 16,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="close-icon"
    >
      <path
        d="M15.71 1.72L14.29 0.299999L8.00004 6.6L1.71004 0.299999L0.290039 1.72L6.59004 8.01L0.290039 14.3L1.71004 15.72L8.00004 9.42L14.29 15.72L15.71 14.3L9.41004 8.01L15.71 1.72Z"
        fill={color}
      />
    </svg>
  );
}
