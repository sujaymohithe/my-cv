import { prisma } from "@/lib/prisma";

// Example Seed Data
const techStackData = [
  {
    category: "Languages",
    order: 1,
    items: ["TypeScript", "JavaScript"],
  },
  {
    category: "Frontend & UI Libraries",
    order: 2,
    items: ["React", "Next.js"],
  },
];

const professionalSummaries = ["Summary 1", "Summary 2"];

const professionalStatements = [
  "professionalStatement 1",
  "professionalStatement 2",
];

const workingPrinciples = ["workingPrinciple 1"];

const aboutSections = [
  {
    title: "What I Enjoy Working On",
    items: ["Work 1", "Work 2", "Work 3"],
  },
  {
    title: "How I Approach Engineering",
    items: ["Approach 1", "Approach 2", "Approach 3"],
  },
];

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
    where: { id: "project_id" },
    create: {
      id: "project_id",
      title: "Title 1",
      description:
        "Desc",
      highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
      stacks: ["React", "SCSS", "AI / Machine Learning Models"],
      featured: false,
    },
    update: {
      stacks: [
        "Next.js (Pages Router)",
        "React",
        "Tailwind CSS",
      ],
    },
  });

  const profile = await prisma.profile.upsert({
    where: { id: "profile_id" },
    create: {
      id: "profile_id",
      name: "Firstname Lastname",
      designation: "Designation",
      professionalStatements,
      professionalSummaries,
      workingPrinciples,
      aboutSections,
      techStacks: {
        create: techStackData.map((category) => ({
          name: category.category,
          order: category.order,
          items: {
            create: category.items.map((item, index) => ({
              name: item,
              order: index + 1,
            })),
          },
        })),
      },
    },
    update: {
      professionalSummaries,
      professionalStatements,
      techStacks: {
        deleteMany: {},
        create: techStackData.map((category) => ({
          name: category.category,
          order: category.order,
          items: {
            create: category.items.map((item, index) => ({
              name: item,
              order: index + 1,
            })),
          },
        })),
      },
    },
  });

  await prisma.contactMethod.createMany({
    data: [
      {
        type: "EMAIL",
        value: "abc@gmail.com",
        label: "Personal",
        profileId: profile.id,
        order: 1,
      },
    ],
  });

  console.log("Seeding complete ✅");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
