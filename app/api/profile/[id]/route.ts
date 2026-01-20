import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { profileSchema } from "@/schemas";

export const runtime = "nodejs"; // Important for Prisma

/**
 * GET /api/profile/:id
 * Fetch a profile by id
 * @param _req - The request object
 * @param context - The context object
 * @param context.params - The request params
 * @returns - The API response
 * @throws {Error} - If there is an error while fetching the profile
 */
export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    const profile = await prisma.profile.findUnique({
      where: { id },
      include: {
        contacts: true,
        techStacks: {
          orderBy: { order: "asc" },
          include: { items: { orderBy: { order: "asc" } } },
        },
      },
    });
    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }
    const validated = profileSchema.parse(profile);

    return NextResponse.json(validated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 },
    );
  }
}
