import { cookies, headers } from "next/headers";
import { cache } from "react";
import {
  DEFAULT_PROFILE_ID,
  PROFILE_REGISTRY,
  type ProfileId,
  resolveProfileId,
  resolveProfileIdFromHost,
} from "./profile-registry";
import type { BlogPost, SiteContent } from "./types";
import { PT_PROFILE_COOKIE } from "./pt-profile-constants";

export const getProfileBundle = cache(
  async (): Promise<{
    id: string;
    siteContent: SiteContent;
    blogPosts: BlogPost[];
  }> => {
    const store = await cookies();
    const headersStore = await headers();
    // Vercel: dominio visitato è in x-forwarded-host; host può coincidere. Preferiamo forwarded.
    const host =
      headersStore.get("x-forwarded-host") ??
      headersStore.get("x-vercel-forwarded-host") ??
      headersStore.get("host");
    const hostId = resolveProfileIdFromHost(host);
    const cookieId = store.get(PT_PROFILE_COOKIE)?.value?.trim();

    const id =
      hostId ??
      (cookieId && cookieId in PROFILE_REGISTRY
        ? cookieId
        : resolveProfileId());

    const bundle =
      id in PROFILE_REGISTRY
        ? PROFILE_REGISTRY[id as ProfileId]
        : PROFILE_REGISTRY[DEFAULT_PROFILE_ID];

    return { id, siteContent: bundle.siteContent, blogPosts: bundle.blogPosts };
  },
);

export async function getActiveProfileId(): Promise<string> {
  return (await getProfileBundle()).id;
}
