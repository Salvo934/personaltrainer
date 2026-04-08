import { getProfileBundle } from "@/data/site";
import { buildPersonJsonLd, getRequestMetadataBase } from "@/lib/seo";

export async function PersonJsonLd() {
  const { siteContent } = await getProfileBundle();
  const base = await getRequestMetadataBase();
  const siteUrl = new URL("/", base).toString();
  const data = buildPersonJsonLd(siteContent, siteUrl);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
