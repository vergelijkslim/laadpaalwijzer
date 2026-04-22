import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(['pillar', 'guide', 'informational', 'comparison', 'homepage', 'seo-reference']),
  keywords: z.array(z.string()).default([]),
  publish_date: z.coerce.date().optional(),
  last_updated: z.coerce.date().optional(),
  author: z.string().default('Redactie Vergelijk Uw Laadpaal'),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  og_title: z.string().optional(),
  og_description: z.string().optional(),
  cluster: z.string().optional(),
});

const laadpalen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/laadpalen' }),
  schema: articleSchema,
});

export const collections = { laadpalen };
