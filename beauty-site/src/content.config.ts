import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const catalog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/catalog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'manicure',
      'pedicure',
      'sterilization',
      'hairdressing',
      'cosmetology',
      'waiting',
      'kits',
    ]),
    priceFrom: z.string(),
    priceTo: z.string().optional(),
    brand: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { catalog, blog };
