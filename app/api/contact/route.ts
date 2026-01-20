import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/schemas";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Important for Prisma

/**
 * GET /api/contact
 *
 * Fetches all contact information in the correct order.
 * @returns A Promise that resolves to a NextResponse object
 * - 200: A JSON array of validated contacts
 * - 500: An error response if the contacts cannot be fetched
 */
export async function GET() {
  try {
    const contacts = await prisma.contactMethod.findMany({
      orderBy: { order: "asc" },
    });
    const validated = contactSchema.array().parse(contacts);
    return NextResponse.json(validated, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 },
    );
  }
}
