import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const productions = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		releaseDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		videoUrl: z.string().optional(),
		category: z.string().optional(),
	}),
});

export const collections = {productions};
