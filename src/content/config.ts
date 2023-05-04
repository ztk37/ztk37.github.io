import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    category: z.string(),
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
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
