import type { BlogPost, SiteContent } from "../../types";

export const domains = ["giulia.katahero.com"];

export const siteContent: SiteContent = {
  enableIntro: false,
  seo: {
    description:
      "Personal trainer a Torino: ricomposizione corporea, forza e coaching online con programmi sostenibili.",
    keywords: ["personal trainer torino", "coaching online", "forza", "ricomposizione"],
    locale: "it_IT",
  },
  brand: {
    name: "Giulia Neri",
    tag: "PT",
    avatarSrc:
      "https://images.unsplash.com/photo-1594824388853-d0c0b0ff7b8a?auto=format&fit=crop&w=200&q=80",
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
    label: "Personal Training · Donna & forza",
    title: "Giulia Neri",
    bio: "Personal trainer certificata · forza · ricomposizione",
    tagline: "Costanza, tecnica, risultati misurabili.",
    primaryCta: { href: "#contact", label: "Prenota una call" },
    secondaryCta: { href: "#plans", label: "Scopri i piani" },
    metrics: [
      { label: "CLIENTI", value: "70+" },
      { label: "ANNI", value: "5" },
      { label: "FOCUS", value: "Forza" },
      { label: "ZONA", value: "Torino" },
    ],
    posterSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
  },
  motivationPills: [
    "Allenamento sostenibile.",
    "Niente estremi, solo metodo.",
    "Progressi tracciati ogni settimana.",
    "Tecnica prima di tutto.",
  ],
  about: {
    title: "Chi sono",
    description: "Aiuto persone impegnate a rimettersi in forma in modo realistico.",
    paragraphs: [
      "Lavoro con percorsi personalizzati su forza e composizione corporea, con obiettivi chiari e verificabili.",
      "Ogni programma parte da valutazione iniziale, progressione graduale e check-in settimanali.",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description: "Percorsi reali e progressi concreti.",
    items: [
      {
        id: "p1",
        title: "Ricomposizione in 16 settimane",
        description: "Forza + nutrizione flessibile con check settimanale.",
        imageSrc:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
        href: "https://www.youtube.com",
      },
    ],
  },
  services: {
    title: "Servizi",
    description: "Percorsi in studio e online.",
    items: [
      {
        id: "s1",
        title: "PT 1:1",
        description: "Sessioni individuali con programma su misura.",
        icon: "strength",
      },
      {
        id: "s2",
        title: "Coaching online",
        description: "Scheda, check-in e revisione tecnica video.",
        icon: "online",
      },
    ],
  },
  plans: {
    title: "Piani",
    description: "Scegli il percorso e scrivimi su WhatsApp.",
    items: [
      {
        id: "plan-start",
        name: "Start",
        tagline: "Per iniziare con metodo",
        price: "€180",
        period: "/4 settimane",
        features: ["2 sessioni a settimana", "Piano base", "Check-in chat"],
        cta: "Scegli Start",
        whatsappMessage: "Ciao! Vorrei informazioni sul piano START (€180/4 settimane).",
      },
      {
        id: "plan-pro",
        name: "Pro",
        tagline: "Il piu scelto",
        price: "€260",
        period: "/4 settimane",
        features: ["3 sessioni a settimana", "Piano completo", "Supporto prioritario"],
        highlighted: true,
        cta: "Scegli Pro",
        whatsappMessage: "Ciao! Mi interessa il piano PRO (€260/4 settimane).",
      },
    ],
  },
  gallery: {
    title: "Galleria",
    description: "Spazi e attrezzature.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
        alt: "Sala pesi",
      },
      {
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
        alt: "Area functional",
      },
    ],
  },
  contact: {
    title: "Contatti",
    description: "Rispondo entro la giornata lavorativa.",
    panelNote: "Scrivimi su WhatsApp per disponibilita e info.",
    hints: {
      whatsapp: "Più veloce per info e appuntamenti",
      phone: "Richiamata su richiesta",
      email: "Preventivi e collaborazioni",
    },
    email: "giulia.neri@example.com",
    phone: "+39 345 112 3344",
    whatsappPhone: "393451123344",
    whatsappIntroMessage: "Ciao Giulia! Ti contatto dal sito per avere informazioni.",
  },
  social: {
    title: "Social",
    description: "Consigli pratici e contenuti settimanali.",
    links: [
      {
        id: "ig",
        label: "Instagram",
        handle: "@giulia.neri.pt",
        href: "https://www.instagram.com",
        meta: "Routine e tips.",
        variant: "instagram",
      },
      {
        id: "yt",
        label: "YouTube",
        handle: "Giulia Neri PT",
        href: "https://www.youtube.com",
        meta: "Approfondimenti tecnici.",
        variant: "youtube",
      },
    ],
  },
  blog: {
    title: "Dal blog",
    description: "Strategie pratiche per allenarti meglio.",
  },
  footer: {
    line: "Giulia Neri · Personal Training",
    copyright: "© 2026",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "forza-per-principianti",
    title: "Forza per principianti: da dove iniziare",
    excerpt: "Tre principi semplici per costruire una routine che dura.",
    date: "2026-04-09",
    readTime: "4 min",
    coverSrc:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Parti da pochi esercizi base e punta alla costanza nelle prime 6 settimane.",
      "Tieni un diario allenamenti: vedere i progressi mantiene alta la motivazione.",
      "Recupero e sonno sono parte del programma, non un dettaglio.",
    ],
  },
];

