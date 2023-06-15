import type { APIRoute } from "astro";
import rss from "@astrojs/rss";

import { getCollection } from "astro:content";

export const get: APIRoute = async () => {
  const posts = await getCollection("blog");

  return rss({
    title: "ztk37 | Website",
    description: "My personal website",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/blog/${post.slug}`,
      pubDate: new Date(),
    })),
  });
};
