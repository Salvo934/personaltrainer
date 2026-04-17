import type { BlogPost, SiteContent } from "./types";
import {
  blogPosts as alexBlog,
  domains as alexDomains,
  siteContent as alexSite,
} from "./profiles/alex-trainer";
import {
  blogPosts as giuliaBlog,
  domains as giuliaDomains,
  siteContent as giuliaSite,
} from "./profiles/giulia-neri";
import {
  blogPosts as marcoBlog,
  domains as marcoDomains,
  siteContent as marcoSite,
} from "./profiles/marco-bianchi";

export const DEFAULT_PROFILE_ID = "alex-trainer" as const;

/** Ogni chiave = nome cartella in `profiles/` e valore di `NEXT_PUBLIC_PT_PROFILE`. */
export const PROFILE_REGISTRY = {
  "alex-trainer": { siteContent: alexSite, blogPosts: alexBlog, domains: alexDomains },
  "giulia-neri": { siteContent: giuliaSite, blogPosts: giuliaBlog, domains: giuliaDomains },
  "marco-bianchi": { siteContent: marcoSite, blogPosts: marcoBlog, domains: marcoDomains },
} satisfies Record<string, { siteContent: SiteContent; blogPosts: BlogPost[]; domains?: string[] }>;

export type ProfileId = keyof typeof PROFILE_REGISTRY;

function normalizeHost(host: string): string {
  return host.trim().toLowerCase().replace(/:\d+$/, "");
}

function parseHostProfileMap(): Record<string, string> {
  // 1) Base map dai domini definiti dentro ogni profilo
  const fromProfiles = Object.entries(PROFILE_REGISTRY).reduce<Record<string, string>>(
    (acc, [profileId, hosts]) => {
      (hosts.domains ?? []).forEach((host) => {
        const normalizedHost = normalizeHost(host);
        if (normalizedHost) acc[normalizedHost] = profileId;
      });
      return acc;
    },
    {},
  );

  // 2) Override opzionale da env (utile in deploy senza modificare codice)
  const raw = process.env.PT_PROFILE_DOMAINS?.trim();
  if (!raw) return fromProfiles;

  const fromEnv = raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((acc, entry) => {
      const [domain, profileId] = entry.split(":").map((part) => part?.trim());
      if (!domain || !profileId) return acc;
      acc[normalizeHost(domain)] = profileId;
      return acc;
    }, {});

  return { ...fromProfiles, ...fromEnv };
}

export function resolveProfileId(): string {
  const raw = process.env.NEXT_PUBLIC_PT_PROFILE?.trim();
  if (raw && raw in PROFILE_REGISTRY) return raw;
  if (raw) {
    console.warn(
      `[pt-template] Profilo sconosciuto "${raw}". Usa uno di: ${Object.keys(PROFILE_REGISTRY).join(", ")}. Fallback: ${DEFAULT_PROFILE_ID}.`,
    );
  }
  return DEFAULT_PROFILE_ID;
}

export function resolveProfileIdFromHost(host: string | null | undefined): string | null {
  if (!host) return null;

  const normalized = normalizeHost(host);
  const mappedProfile = parseHostProfileMap()[normalized];

  if (mappedProfile && mappedProfile in PROFILE_REGISTRY) return mappedProfile;

  if (mappedProfile) {
    console.warn(
      `[pt-template] Profilo "${mappedProfile}" configurato per host "${normalized}" ma non presente in PROFILE_REGISTRY.`,
    );
  }

  return null;
}

/** Elenco per dashboard / anteprima (slug = chiave registry). */
export function listProfiles(): {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  avatarSrc: string;
}[] {
  return Object.entries(PROFILE_REGISTRY).map(([id, bundle]) => {
    const s = bundle.siteContent;
    return {
      id,
      name: s.brand.name,
      tagline: s.hero.tagline,
      bio: s.hero.bio,
      avatarSrc: s.brand.avatarSrc,
    };
  });
}
