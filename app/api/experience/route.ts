import { prisma } from "@/lib/prisma";
import { experienceSchema } from "@/schemas";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Important for Prisma

/**
 * GET /api/experience
 * Retrieves a list of all experiences in ascending order of experience order.
 * @returns A Promise that resolves to a NextResponse object containing the list of experiences.
 * @throws {Error} If there is an error fetching the experiences.
 */
export async function GET() {
  try {
    const experience = await prisma.experience.findMany({
      orderBy: { order: "asc" },
      include: { highlights: { orderBy: { order: "asc" } } },
    });
    const validated = experienceSchema.array().parse(experience);
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
