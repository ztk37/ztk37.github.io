import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    category: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    hidden: z.boolean(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    language: z.string(),
    name: z.string(),
    description: z.string(),
    hidden: z.boolean(),
  }),
});

const snippets = defineCollection({
  schema: z.object({
    language: z.string(),
  }),
});

export const collections = {
  posts,
  projects,
  snippets,
};
