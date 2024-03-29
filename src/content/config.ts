import { defineCollection, z } from "astro:content";

/**
 * TODO: Refactor
 * 
 * tags => technologies
 * 
 * Technologie enum type => util function for "rendering"
 */

const tag = z.enum([
  "TypeScript",
  "JavaScript",
  "React",
  "Tailwind",
  "Design Patterns",
]);

export type Tag = z.infer<typeof tag>;

const blog = defineCollection({
  schema: z.object({
    category: z.string(),
    title: z.string(),
    summary: z.string(),
    tags: z.array(tag),
    draft: z.boolean(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    language: z.string(),
    name: z.string(),
    summary: z.string(),
    hidden: z.boolean(),
  }),
});

const snippets = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    language: z.string(),
  }),
});

export const collections = {
  blog,
  projects,
  snippets,
};
