import type { BlogPost } from "./types";

export type { BlogPost };

export function getPostBySlug(
  slug: string,
  posts: BlogPost[],
): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
