export type NavItem = { href: string; label: string };

export type HeroContent = {
  label: string;
  title: string;
  bio: string;
  tagline: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  metrics: { label: string; value: string }[];
  heroVideoDesktop?: string;
  heroVideoMobile?: string;
  posterSrc: string;
};

/** Dettaglio progetto mostrato nel modal “Apri progetto” */
export type PortfolioProjectDetail = {
  /** Testo lungo; se assente si usa la `description` breve del card */
  longDescription?: string;
  /** Immagini aggiuntive (oltre alla copertina / thumbnail) */
  gallery?: { src: string; alt: string }[];
  /** Scheda: punti chiave dell’allenamento */
  trainingPlan?: string[];
  /** Obiettivi del percorso */
  objectives?: string[];
  /** Nutrizione / approccio alimentare (uno o più punti) */
  nutrition?: string[];
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
  imageSrc?: string;
  href?: string;
  /** Contenuto esteso per il modal (opzionale: se manca, il modal mostra comunque titolo + descrizione + media) */
  projectDetail?: PortfolioProjectDetail;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: "strength" | "nutrition" | "mobility" | "online";
};

export type PlanItem = {
  id: string;
  name: string;
  tagline?: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  whatsappMessage: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type SocialLink = {
  id: string;
  label: string;
  handle: string;
  href: string;
  meta: string;
  variant: "instagram" | "tiktok" | "youtube" | "facebook";
};

export type SiteContent = {
  enableIntro: boolean;
  brand: { name: string; tag: string; avatarSrc: string };
  nav: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  hero: HeroContent;
  motivationPills: string[];
  about: { title: string; description: string; paragraphs: string[] };
  portfolio: { title: string; description: string; items: PortfolioItem[] };
  services: { title: string; description: string; items: ServiceItem[] };
  plans: { title: string; description: string; items: PlanItem[] };
  gallery: { title: string; description: string; images: GalleryImage[] };
  contact: {
    title: string;
    description: string;
    panelNote: string;
    hints: {
      whatsapp: string;
      phone: string;
      email: string;
    };
    email: string;
    phone: string;
    whatsappPhone: string;
    whatsappIntroMessage: string;
  };
  social: { title: string; description: string; links: SocialLink[] };
  blog: { title: string; description: string };
  footer: { line: string; copyright: string };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverSrc: string;
  body: string[];
};
