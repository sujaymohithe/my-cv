import { Contact } from "@/schemas";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetches the contact information from the API and returns it as a Promise.
 * The promise resolves to a ContactSchema object.
 * @returns A promise that resolves to a Contact object.
 * @throws {Error} If the API request fails.
 */
export async function getContacts(): Promise<Contact[]> {
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/api/contact`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch experience");
  }

  return res.json();
}
