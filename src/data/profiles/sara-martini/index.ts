import type { BlogPost, SiteContent } from "../../types";

export const domains = ["sara.katahero.com"];

export const siteContent: SiteContent = {
  enableIntro: false,
  seo: {
    description:
      "Personal trainer a Bologna: Pilates, postura e functional training con percorsi su misura in studio e online.",
    keywords: ["personal trainer bologna", "pilates", "postura", "functional training"],
    locale: "it_IT",
  },
  brand: {
    name: "Sara Martini",
    tag: "PT",
    avatarSrc:
      "https://images.unsplash.com/photo-1548691905-57c3bc8d52fd?auto=format&fit=crop&w=200&q=80",
  },
  nav: [
    { href: "#about", label: "Chi sono" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Servizi" },
    { href: "#plans", label: "Piani" },
    { href: "#gallery", label: "Galleria" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contatti" },
    { href: "#social", label: "Social" },
  ],
  ctaLabel: "Prenota",
  ctaHref: "#contact",
  hero: {
    label: "Pilates · Postura · Functional",
    title: "Sara Martini",
    bio: "Personal trainer certificata · core · mobilità",
    tagline: "Corpo allineato, movimento consapevole, risultati duraturi.",
    primaryCta: { href: "#contact", label: "Prenota una lezione" },
    secondaryCta: { href: "#plans", label: "Vedi i piani" },
    metrics: [
      { label: "CLIENTI", value: "85+" },
      { label: "ANNI", value: "7" },
      { label: "FOCUS", value: "Postura" },
      { label: "ZONA", value: "Bologna" },
    ],
    posterSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
  },
  motivationPills: [
    "Respiro e attivazione del core.",
    "Niente dolore: progressioni graduali.",
    "Mobilità prima dei carichi.",
    "Ascolto del corpo, non estetica a ogni costo.",
  ],
  about: {
    title: "Chi sono",
    description:
      "Ti accompagno verso un corpo più stabile, flessibile e forte con Pilates e allenamento funzionale.",
    paragraphs: [
      "Lavoro con persone sedentarie, neo-mamme e sportivi che vogliono correggere atteggiamenti posturali e ridurre tensioni.",
      "Ogni percorso parte da valutazione, obiettivi condivisi e sessioni che uniscono tecnica, respirazione e progressione sicura.",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description: "Percorsi reali su postura e benessere.",
    items: [
      {
        id: "p1",
        title: "Rieducazione posturale in 12 settimane",
        description: "Schiena e collo: esercizi mirati e routine casa.",
        imageSrc:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
        href: "https://www.youtube.com",
      },
    ],
  },
  services: {
    title: "Servizi",
    description: "Studio in centro e lezioni online.",
    items: [
      {
        id: "s1",
        title: "Pilates & mat",
        description: "Lezioni individuali o piccoli gruppi su tappetino e attrezzi leggeri.",
        icon: "mobility",
      },
      {
        id: "s2",
        title: "Functional & core",
        description: "Forza controllata, stabilità e mobilità articolare.",
        icon: "strength",
      },
      {
        id: "s3",
        title: "Coaching online",
        description: "Videolezioni, scheda casa e check-in settimanali.",
        icon: "online",
      },
    ],
  },
  plans: {
    title: "Piani",
    description: "Scegli il percorso e scrivimi su WhatsApp.",
    items: [
      {
        id: "plan-base",
        name: "Base",
        tagline: "Per iniziare",
        price: "€190",
        period: "/4 settimane",
        features: ["2 sessioni a settimana", "Focus postura", "Materiali in PDF"],
        cta: "Scegli Base",
        whatsappMessage: "Ciao Sara! Vorrei informazioni sul piano BASE (€190/4 settimane).",
      },
      {
        id: "plan-plus",
        name: "Plus",
        tagline: "Il più richiesto",
        price: "€270",
        period: "/4 settimane",
        features: ["3 sessioni a settimana", "Piano completo", "Supporto prioritario"],
        highlighted: true,
        cta: "Scegli Plus",
        whatsappMessage: "Ciao Sara! Mi interessa il piano PLUS (€270/4 settimane).",
      },
    ],
  },
  gallery: {
    title: "Galleria",
    description: "Studio e attrezzature.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
        alt: "Sala Pilates",
      },
      {
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
        alt: "Area allenamento",
      },
    ],
  },
  contact: {
    title: "Contatti",
    description: "Rispondo entro la giornata lavorativa.",
    panelNote: "WhatsApp per disponibilità e prima consulenza.",
    hints: {
      whatsapp: "Veloce per slot e domande",
      phone: "Su richiesta",
      email: "Collaborazioni e aziende",
    },
    email: "sara.martini@example.com",
    phone: "+39 351 998 7766",
    whatsappPhone: "393519987766",
    whatsappIntroMessage: "Ciao Sara! Ti contatto dal sito per informazioni sui tuoi percorsi.",
  },
  social: {
    title: "Social",
    description: "Esercizi e consigli sulla postura.",
    links: [
      {
        id: "ig",
        label: "Instagram",
        handle: "@sara.martini.pt",
        href: "https://www.instagram.com",
        meta: "Routine e tips.",
        variant: "instagram",
      },
      {
        id: "yt",
        label: "YouTube",
        handle: "Sara Martini PT",
        href: "https://www.youtube.com",
        meta: "Lezioni brevi e Q&A.",
        variant: "youtube",
      },
    ],
  },
  blog: {
    title: "Dal blog",
    description: "Postura, Pilates e movimento quotidiano.",
  },
  footer: {
    line: "Sara Martini · Personal Training",
    copyright: "© 2026",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "core-e-respirazione-base",
    title: "Core e respirazione: la base del Pilates",
    excerpt: "Tre cue semplici per attivare il centro senza bloccare il respiro.",
    date: "2026-04-14",
    readTime: "4 min",
    coverSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Il core non è solo addominali: è la capacità di stabilizzare la colonna mentre respiri con il diaframma.",
      "Inizia con respiri laterali e costole mobili prima di caricare le serie.",
      "Meglio pochi movimenti precisi che molte ripetizioni affrettate.",
    ],
  },
];
