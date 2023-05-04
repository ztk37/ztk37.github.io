import { defineCollection, z } from "astro:content";

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
    hidden: z.boolean(),
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
