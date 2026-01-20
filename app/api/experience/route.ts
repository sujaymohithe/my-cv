import { prisma } from "@/lib/prisma";
import { experienceSchema } from "@/schemas";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Important for Prisma

/**
 * GET /api/experience
 * Retrieves a list of all experiences in ascending order of experience order.
 * @returns A Promise that resolves to a NextResponse object
 * - 200: A JSON array of validated experiences
 * - 500: An error response if the experiences cannot be fetched
 */
export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { order: "asc" },
      include: { highlights: { orderBy: { order: "asc" } } },
    });
    const validated = experienceSchema.array().parse(experiences);
    return NextResponse.json(validated, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}
