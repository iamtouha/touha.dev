import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    img: z.string(),
    tags: z.array(z.string()),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    read: z.string(),
    date: z.date(),
    published: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
  articles: articlesCollection,
};
