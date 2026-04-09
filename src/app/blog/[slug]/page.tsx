import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/data/blog";
import { getProfileBundle } from "@/data/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BlogPostingJsonLd } from "@/components/seo/BlogPostingJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const { siteContent, blogPosts } = await getProfileBundle();
  const post = getPostBySlug(slug, blogPosts);
  if (!post) return {};
  const name = siteContent.brand.name;
  return buildPageMetadata({
    siteContent,
    title: `${post.title} · ${name}`,
    description: post.excerpt,
    canonicalPath: `/blog/${post.slug}`,
    ogType: "article",
    ogImageOverride: post.coverSrc,
    article: {
      publishedTime: `${post.date}T12:00:00.000Z`,
    },
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { siteContent: c, blogPosts } = await getProfileBundle();
  const post = getPostBySlug(slug, blogPosts);
  if (!post) notFound();

  return (
    <div className="site">
      <BlogPostingJsonLd slug={slug} />
      <SiteHeader
        brandName={c.brand.name}
        brandTag={c.brand.tag}
        avatarSrc={c.brand.avatarSrc}
        nav={c.nav}
        ctaLabel={c.ctaLabel}
        ctaHref={c.ctaHref}
        socialLinks={c.social.links}
      />
      <main>
        <article className="blog-post">
          <Link href="/blog" className="blog-back">
            ← Blog
          </Link>
          <div className="blog-post-cover">
            <Image
              src={post.coverSrc}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42rem"
              className="photo-img"
            />
          </div>
          <p className="blog-post-meta">
            {post.date} · {post.readTime}
          </p>
          <h1>{post.title}</h1>
          <div className="blog-post-body">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter content={c} />
    </div>
  );
}
