import { HomePageClient } from "@/components/home/HomePageClient";
import { getProfileBundle } from "@/data/site";

export default async function Home() {
  const { siteContent, blogPosts } = await getProfileBundle();
  return (
    <HomePageClient
      siteContent={siteContent}
      blogPreviewPosts={blogPosts.slice(0, 3)}
    />
  );
}
