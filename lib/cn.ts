import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that merges multiple class names into a single string.
 * It uses `clsx` to handle the merging of class names, and `twMerge` to
 * handle the merging of utility-first class names (e.g. `bg-red-500`).
 * @param inputs An array of class names to merge.
 * @returns A single string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
