import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });
/**
 * Seeds the database with sample project data.
 *
 * This script is intended to be run in a development environment
 * to populate the database with sample data for testing and
 * demonstration purposes.
 *
 * It is not intended to be run in a production environment as it
 * will overwrite any existing data in the database.
 */
async function main() {
  await prisma.project.upsert({
    where: { id: "project-id" },
    update: {},
    create: {
      id: "project-id",
      title: "Project Title",
      description:
        "The project description goes here. It should be a short summary of the project and its purpose.",
      highlights: [
        "Highlight 1",
        "Highlight 2",
        "Highlight 3",
      ],
      stack: [
        "React",
        "SCSS",
        "AI / Machine Learning Models",
      ],
      featured: false,
    },
  });
  console.log("Seed completed ✅");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
