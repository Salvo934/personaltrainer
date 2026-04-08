import { HomePageClient } from "@/components/home/HomePageClient";
import { getProfileBundle } from "@/data/site";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const { siteContent } = await getProfileBundle();
  const name = siteContent.brand.name;
  return buildPageMetadata({
    siteContent,
    title: `${name} · Personal Training`,
    canonicalPath: "/",
  });
}

export default async function Home() {
  const { siteContent, blogPosts } = await getProfileBundle();
  return (
    <HomePageClient
      siteContent={siteContent}
      blogPreviewPosts={blogPosts.slice(0, 3)}
    />
  );
}
