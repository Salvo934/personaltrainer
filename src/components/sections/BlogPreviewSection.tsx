import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/site";

type Props = {
  index: string;
  title: string;
  description: string;
  posts: BlogPost[];
};

export function BlogPreviewSection({ index, title, description, posts }: Props) {
  const n = posts.length;
  return (
    <section
      id="blog"
      className="section blog-section"
      data-item-count={n}
      aria-labelledby="blog-heading"
    >
      <div className="blog-ambient" aria-hidden="true" />
      <div className="blog-shell">
        <header className="blog-header">
          <p className="blog-eyebrow">{index}</p>
          <h2 id="blog-heading" className="blog-title">
            {title}
          </h2>
          <p className="blog-lede">{description}</p>
        </header>

        <div className="blog-grid" data-item-count={n}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-media">
                <Image
                  src={post.coverSrc}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="photo-img"
                />
              </div>
              <div className="blog-card-body">
                <p className="blog-card-meta">
                  {post.date} · {post.readTime}
                </p>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <span className="blog-card-cta">
                  Leggi
                  <span className="blog-card-cta-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="blog-footer-cta">
          <Link href="/blog" className="blog-all-link">
            Tutti gli articoli
          </Link>
        </p>
      </div>
    </section>
  );
}
