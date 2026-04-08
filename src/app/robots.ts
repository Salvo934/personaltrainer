import type { MetadataRoute } from "next";
import { getRequestMetadataBase } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await getRequestMetadataBase();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard"],
    },
    sitemap: `${base.origin}/sitemap.xml`,
    host: base.host,
  };
}
