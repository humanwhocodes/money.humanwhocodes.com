import rss from '@astrojs/rss';
import site from "../../data/config.yml";

export const get = () =>
	rss({
		title: site.name,
		description: site.description,
		site: import.meta.env.SITE,
		items: import.meta.glob('../_posts/**/*.md'),
	});
