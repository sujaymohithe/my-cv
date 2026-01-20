import { z } from "zod";

export const contactSchema = z.object({
    id: z.string(),
    type: z.enum(["EMAIL", "GITHUB", "LINKEDIN", "WEBSITE"]),
    label: z.string().optional(),
    value: z.string(),
    order: z.number().default(0),
    visible: z.boolean().default(true),
    profileId: z.string(),
    createdAt: z.date(),
})

export const techItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  order: z.number(),
});

export const techCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  order: z.number(),
  items: z.array(techItemSchema).default([]),
});

export const profileSchema = z.object({
  id: z.string(),
  name: z.string(),
  designation: z.string(),
  professionalSummaries: z.array(z.string()).default([]),
  professionalStatements: z.array(z.string()).default([]),
  workingPrinciples: z.array(z.string()).default([]),
  aboutSections: z.array(
    z.object({
      title: z.string(),
      items: z.array(z.string()).default([]),
    }),
  ).default([]),
  techStacks: z.array(techCategorySchema).default([]),
  createdAt: z.date(),
  updatedAt: z.date(),
  contacts: z.array(contactSchema).default([]),
});

export type TechCategory = z.infer<typeof techCategorySchema>;

export type Profile = z.infer<typeof profileSchema>;
