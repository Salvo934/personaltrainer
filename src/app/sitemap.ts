import type { MetadataRoute } from "next";
import { getProfileBundle } from "@/data/site";
import { getRequestMetadataBase } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await getRequestMetadataBase();
  const origin = base.origin;
  const { blogPosts } = await getProfileBundle();
  const last = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${origin}/`, lastModified: last, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/blog`, lastModified: last, changeFrequency: "weekly", priority: 0.8 },
  ];

  const posts: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${origin}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
