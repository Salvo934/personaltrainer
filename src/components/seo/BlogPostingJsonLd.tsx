import { getProfileBundle } from "@/data/site";
import { getPostBySlug } from "@/data/blog";
import { buildBlogPostingJsonLd, getRequestMetadataBase } from "@/lib/seo";

type Props = { slug: string };

export async function BlogPostingJsonLd({ slug }: Props) {
  const { siteContent, blogPosts } = await getProfileBundle();
  const post = getPostBySlug(slug, blogPosts);
  if (!post) return null;
  const base = await getRequestMetadataBase();
  const pageUrl = new URL(`/blog/${post.slug}`, base).toString();
  const data = buildBlogPostingJsonLd(post, siteContent, pageUrl);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
