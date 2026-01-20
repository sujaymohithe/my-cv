import { Profile } from "@/schemas";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetches the profile data from the API and returns it as a Promise.
 * The promise resolves to a Profile object.
 * @throws {Error} If the API request fails.
 * @returns A promise that resolves to a Profile object.
 */
export async function getProfile(): Promise<Profile> {
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }
  const res = await fetch(`${baseUrl}/api/profile/sujay_mohithe`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }
  return res.json();
}
