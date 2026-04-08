import type { BlogPost, SiteContent } from "../../types";

/** Profilo di esempio: duplica la cartella `esempio-secondo`, rinominala (slug) e modifica solo i dati qui. */
export const domains = ["esempiosecondo.it", "www.esempiosecondo.it"];

export const siteContent: SiteContent = {
  enableIntro: false,
  brand: {
    name: "Maria Rossi",
    tag: "PT",
    avatarSrc:
      "https://images.unsplash.com/photo-1548691905-57c3bc5a5dd2?auto=format&fit=crop&w=200&q=80",
  },
  nav: [
    { href: "#about", label: "Chi sono" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Servizi" },
    { href: "#plans", label: "Piani" },
    { href: "#gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contatti" },
    { href: "#social", label: "Social" },
  ],
  ctaLabel: "Contattami",
  ctaHref: "#contact",
  hero: {
    label: "Personal Training · Donna & gruppo",
    title: "Maria Rossi",
    bio: "Allenamenti funzionali · gruppo ridotto · benessere",
    tagline: "Equilibrio tra forza e mobilità.",
    primaryCta: { href: "#contact", label: "Scrivimi" },
    secondaryCta: { href: "#plans", label: "Vedi i piani" },
    metrics: [
      { label: "CLIENTI", value: "85+" },
      { label: "ANNI", value: "6" },
      { label: "FOCUS", value: "Gruppo" },
      { label: "ZONA", value: "Roma" },
    ],
    posterSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80",
  },
  motivationPills: [
    "Costanza prima della perfezione.",
    "Ascolto del corpo.",
    "Piccoli step, grandi risultati.",
    "Allenamento smart, non estenuante.",
  ],
  about: {
    title: "Chi sono",
    description: "Ti accompagno con metodo e attenzione al tuo ritmo.",
    paragraphs: [
      "Sono personal trainer specializzata in allenamento funzionale e piccoli gruppi: il mio obiettivo è rendere l’attività fisica sostenibile nel tempo.",
      "Lavoriamo su mobilità, core e condizione generale, adattando ogni sessione al tuo livello.",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description: "Alcuni percorsi e contenuti.",
    items: [
      {
        id: "p1",
        title: "Gruppo mattutino",
        description: "Sessioni da 45 minuti, massimo 6 persone.",
        imageSrc:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
        href: "https://www.youtube.com",
        projectDetail: {
          longDescription:
            "Gruppo fisso al mattino: stesso orario, progressioni condivise e focus settimanale (core, mobilità, condizione).",
          gallery: [
            {
              src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
              alt: "Lezione di gruppo",
            },
          ],
          objectives: ["Costanza (≥2 presenze a settimana)", "Migliorare postura e stabilità"],
          trainingPlan: [
            "Riscaldamento guidato 8–10 minuti",
            "Blocco principale a circuiti o station",
            "Defaticamento e mobilità 5 minuti",
          ],
          nutrition: [
            "Linee guida idratazione pre/dopo lezione",
            "Suggerimenti su colazione leggera prima dell’allenamento (facoltativo)",
          ],
        },
      },
    ],
  },
  services: {
    title: "Servizi",
    description: "Cosa offro.",
    items: [
      {
        id: "s1",
        title: "PT 1:1",
        description: "Sessioni individuali su obiettivi specifici.",
        icon: "strength",
      },
      {
        id: "s2",
        title: "Small group",
        description: "Gruppi fino a 6 partecipanti.",
        icon: "online",
      },
    ],
  },
  plans: {
    title: "Piani",
    description: "Prezzi indicativi — scrivimi per un piano su misura.",
    items: [
      {
        id: "plan-base",
        name: "Base",
        tagline: "4 sessioni al mese",
        price: "€160",
        period: "/mese",
        features: ["1 sessione a settimana", "Scheda aggiornata", "Supporto WhatsApp"],
        cta: "Scegli Base",
        whatsappMessage:
          "Ciao Maria! Vorrei informazioni sul piano BASE (€160/mese).",
      },
      {
        id: "plan-advanced",
        name: "Advanced",
        tagline: "6 sessioni al mese",
        price: "€240",
        period: "/mese",
        features: ["2 sessioni a settimana", "Scheda aggiornata", "Supporto WhatsApp"],
        cta: "Scegli Advanced",
        whatsappMessage: "Ciao Maria! Vorrei informazioni sul piano ADVANCED (€240/mese).",
      },
      {
        id: "plan-elite",
        name: "Elite",
        tagline: "8 sessioni al mese",
        price: "€320",
        period: "/mese",
        features: ["3 sessioni a settimana", "Scheda aggiornata", "Supporto WhatsApp"],
        cta: "Scegli Elite",
        whatsappMessage: "Ciao Maria! Vorrei informazioni sul piano ELITE (€320/mese).",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    description: "Spazio e attrezzatura.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        alt: "Studio",
      },
      {
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
        alt: "Attrezzi",
      },
    ],
  },
  contact: {
    title: "Contatti",
    description: "Scegli il canale che preferisci.",
    panelNote: "Rispondo entro 24 ore nei giorni feriali.",
    hints: {
      whatsapp: "Messaggi veloci",
      phone: "Chiamate",
      email: "Dettagli e preventivi",
    },
    email: "maria.rossi@example.com",
    phone: "+39 333 111 2233",
    whatsappPhone: "393331112233",
    whatsappIntroMessage: "Ciao Maria! Ti scrivo dal sito per avere informazioni.",
  },
  social: {
    title: "Social",
    description: "Seguimi per aggiornamenti.",
    links: [
      {
        id: "ig",
        label: "Instagram",
        handle: "@mariarossipt",
        href: "https://www.instagram.com",
        meta: "Storie e workout.",
        variant: "instagram",
      },
      {
        id: "yt",
        label: "YouTube",
        handle: "Maria Rossi PT",
        href: "https://www.youtube.com",
        meta: "Video brevi.",
        variant: "youtube",
      },
      {
        id: "tt",
        label: "TikTok",
        handle: "@mariarossipt",
        href: "https://www.tiktok.com/@mariarossipt",
        meta: "Micro-lezioni e drill veloci.",
        variant: "tiktok",
      },
    ],
  },
  blog: {
    title: "Dal blog",
    description: "Articoli sul movimento.",
    },

  footer: {
    line: "Maria Rossi · Personal Training",
    copyright: "© 2026",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "consistenza",
    title: "Perché la costanza batte l’intensità",
    excerpt: "Tre idee per non mollare dopo le prime settimane.",
    date: "2026-02-01",
    readTime: "3 min",
    coverSrc:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    body: [
      "La regolarità crea abitudine: meglio tre sessioni leggere che una devastante e poi stop.",
      "Traccia i progressi con semplici note: sensazioni, sonno, energia.",
    ],
  },
  {
    slug: "riscaldamento",
    title: "Riscaldamento in 8 minuti",
    excerpt: "Sequenza base prima di un allenamento completo.",
    date: "2026-01-15",
    readTime: "4 min",
    coverSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Mobilità caviglia e anche: 2 minuti.",
      "Catena posteriore con elastico: 3 minuti.",
      "3 minuti di attivazione core leggera.",
    ],
  },
  {
    slug: "riscaldamento",
    title: "Riscaldamento in 8 minuti",
    excerpt: "Sequenza base prima di un allenamento completo.",
    date: "2026-01-15",
    readTime: "4 min",
    coverSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Mobilità caviglia e anche: 2 minuti.",
      "Catena posteriore con elastico: 3 minuti.",
      "3 minuti di attivazione core leggera.",
    ],
  },
];
