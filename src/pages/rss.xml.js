import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const productions = await getCollection("productions");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: productions.map((prod) => {
			const [lang, ...slugParts] = prod.id.split('/');
			return {
				title: prod.data.title,
				pubDate: prod.data.releaseDate,
				description: prod.data.description,
				link: `/${lang}/productions/${slugParts.join('/')}/`,
			};
		}),
	});
}
