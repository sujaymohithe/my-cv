import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs"; // Important for Prisma

/**
 * GET /api/projects
 * Retrieves a list of all projects in descending order of creation date.
 * @returns A Promise that resolves to a NextResponse object containing the list of projects.
 * @throws {Error} If there is an error fetching the projects.
 */
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
