import type { Metadata } from "next";
import { headers } from "next/headers";
import type { BlogPost, SiteContent } from "@/data/types";

export async function getRequestMetadataBase(): Promise<URL> {
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3001";
  return new URL(`${proto}://${host}`);
}

export function defaultSiteDescription(content: SiteContent): string {
  const fromSeo = content.seo?.description?.trim();
  if (fromSeo) return fromSeo;
  const raw = `${content.hero.tagline} — ${content.hero.bio}`.replace(/\s+/g, " ").trim();
  return raw.length > 160 ? `${raw.slice(0, 157)}…` : raw;
}

export function ogImageUrl(content: SiteContent): string {
  return content.seo?.ogImage?.trim() || content.hero.posterSrc;
}

export async function buildPageMetadata(opts: {
  siteContent: SiteContent;
  title: string;
  description?: string;
  canonicalPath: string;
  ogType?: "website" | "article";
  article?: { publishedTime?: string; modifiedTime?: string };
  /** Es. copertina articolo per Open Graph. */
  ogImageOverride?: string;
}): Promise<Metadata> {
  const base = await getRequestMetadataBase();
  const description = opts.description ?? defaultSiteDescription(opts.siteContent);
  const canonical = new URL(opts.canonicalPath, base).toString();
  const image = opts.ogImageOverride?.trim() || ogImageUrl(opts.siteContent);
  const siteName = opts.siteContent.brand.name;
  const locale = opts.siteContent.seo?.locale ?? "it_IT";

  return {
    metadataBase: base,
    title: opts.title,
    description,
    keywords: opts.siteContent.seo?.keywords,
    alternates: { canonical },
    openGraph: {
      type: opts.ogType ?? "website",
      url: canonical,
      title: opts.title,
      description,
      siteName,
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      ...(opts.article?.publishedTime && {
        publishedTime: opts.article.publishedTime,
      }),
      ...(opts.article?.modifiedTime && {
        modifiedTime: opts.article.modifiedTime,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export function buildPersonJsonLd(
  content: SiteContent,
  siteUrl: string,
): Record<string, unknown> {
  const sameAs = content.social.links.map((l) => l.href).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.brand.name,
    description: content.hero.bio,
    image: content.brand.avatarSrc,
    url: siteUrl,
    ...(sameAs.length ? { sameAs } : {}),
    email: content.contact.email,
    telephone: content.contact.phone,
  };
}

export function buildBlogPostingJsonLd(
  post: BlogPost,
  siteContent: SiteContent,
  pageUrl: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverSrc,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: siteContent.brand.name,
    },
    publisher: {
      "@type": "Person",
      name: siteContent.brand.name,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };
}
