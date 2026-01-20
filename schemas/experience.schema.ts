import z from "zod";

const experienceHighlishtsSchema = z.object({
  id: z.string(),
  text: z.string(),
  order: z.number(),
  experienceId: z.string(),
  createdAt: z.date(),
});

export const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  order: z.number().default(0),
  startYear: z.number(),
  endYear: z.number().optional().nullable(),
  isCurrent: z.boolean().default(false),
  stacks: z.array(z.string()).default([]),
  highlights: z.array(experienceHighlishtsSchema).default([]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Experience = z.infer<typeof experienceSchema>;
