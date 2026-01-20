import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { projectSchema } from "@/schemas";

export const runtime = "nodejs"; // Important for Prisma

/**
 * GET /api/projects
 * Retrieves a list of all projects in descending order of creation date.
 * @returns A Promise that resolves to a NextResponse object
 * - 200: A JSON array of validated projects
 * - 500: An error response if the projects cannot be fetchedd
 */
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    const validated = projectSchema.array().parse(projects);
    return NextResponse.json(validated, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}
