import Image from "next/image";
import Link from "next/link";
import { getProfileBundle } from "@/data/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const { siteContent } = await getProfileBundle();
  return {
    title: `Blog · ${siteContent.brand.name}`,
  };
}

export default async function BlogIndexPage() {
  const { siteContent: c, blogPosts } = await getProfileBundle();

  return (
    <div className="site">
      <SiteHeader
        brandName={c.brand.name}
        brandTag={c.brand.tag}
        avatarSrc={c.brand.avatarSrc}
        nav={c.nav}
        ctaLabel={c.ctaLabel}
        ctaHref={c.ctaHref}
      />
      <main className="blog-archive">
        <h1 className="blog-archive-title">Blog</h1>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-list-item">
              <div className="blog-list-thumb">
                <Image src={post.coverSrc} alt="" fill sizes="200px" className="photo-img" />
              </div>
              <div className="blog-list-body">
                <p className="blog-list-meta">
                  {post.date} · {post.readTime}
                </p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter content={c} />
    </div>
  );
}
