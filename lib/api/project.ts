import { Project } from "@/schemas";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetches the list of projects from the API and returns them as a Promise.
 * @returns - A promise that resolves to a list of projects.
 * @throws {Error} If the API request fails.
 */
export async function getProjects(): Promise<Project[]> {
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
