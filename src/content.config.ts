import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.enum(['Technical', 'Functional', 'Training']).optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    readTime: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
