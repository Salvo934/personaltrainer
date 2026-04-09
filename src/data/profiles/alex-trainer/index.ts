import type { BlogPost, SiteContent } from "../../types";

export const domains = [ "alex.katahero.com"];

export const siteContent: SiteContent = {
  enableIntro: false,
  seo: {
    description:
      "Personal training e performance: coaching certificato, preparazione atletica e nutrizione applicata. Sessioni in studio, outdoor o online.",
    keywords: [
      "personal trainer",
      "allenamento",
      "performance",
      "nutrizione",
      "coaching",
    ],
    locale: "it_IT",
  },
  brand: {
    name: "Alex Trainer",
    tag: "PT",
    avatarSrc: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=200&q=80",
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
    label: "Personal Training · Performance",
    title: "Alex Trainer",
    bio: "Coach certificato · preparazione atletica · nutrizione applicata",
    tagline: "Costruisci abitudini che durano.",
    primaryCta: { href: "#contact", label: "Prenota una consulenza" },
    secondaryCta: { href: "#plans", label: "Vedi i piani" },
    metrics: [
      { label: "CLIENTI", value: "120+" },
      { label: "ANNI", value: "8" },
      { label: "SESSIONI", value: "4k+" },
      { label: "FOCUS", value: "1:1" },
    ],
    posterSrc:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
  },
  motivationPills: [
    "Progressione intelligente. Risultati misurabili.",
    "Tecnica prima del carico.",
    "Recupero parte del programma.",
    "Coaching, non solo allenamento.",
    "Obiettivi chiari. Piano settimanale.",
    "Zero drammi. Solo processo.",
  ],
  about: {
    title: "Chi sono",
    description: "Metodo, empatia e numeri: così accompagno il tuo percorso.",
    paragraphs: [
      "Sono un personal trainer con base scientifica e esperienza sul campo: lavoro su forza, mobilità e composizione corporea con programmi individuali.",
      "Il mio approccio unisce valutazione posturale, progressioni di carico e abitudini alimentari realistiche — niente shortcut, solo costanza guidata.",
      "Alleniamo insieme in studio, outdoor o online live: l’importante è la continuità e il feedback settimanale.",
      "Che tu parta da zero o voglia alzare l’asticella sportiva, costruiamo un piano chiaro e tracciabile.",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description: "Risultati, trasformazioni e contenuti dal canale.",
    items: [
      {
        id: "p1",
        title: "Percorso body recomposition",
        description: "12 settimane: forza + deficit controllato. Focus tecnica squat e press.",
        youtubeId: "9bZkp7q19f0",
        projectDetail: {
          longDescription:
            "Percorso strutturato su tre mesi con obiettivo di ricomposizione corporea: mantenere o incrementare la forza sui massimali mentre si lavora su un deficit calorico moderato e sostenibile.\n\nOgni settimana: sessioni in sala, passi giornalieri, check-in nutrizionale e aggiustamenti di volume.",
          gallery: [
            {
              src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
              alt: "Allenamento in palestra",
            },
            {
              src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
              alt: "Allenamento funzionale",
            },
          ],
          objectives: [
            "Ridurre massa grassa mantenendo forza su squat e panca",
            "Costruire abitudini alimentari flessibili (non diete rigide)",
            "Sessioni 3x settimana + monitoraggio passi e sonno",
          ],
          trainingPlan: [
            "Fase 1–4: tecnica multiarticolari, RPE 7–8, volume medio",
            "Fase 5–8: progressioni carico, accessorii per punti deboli",
            "Fase 9–12: intensità mirata, deload programmato ogni 4–5 settimane",
            "Cardio: camminata inclinata / bici 2x settimana (non HIIT eccessivo)",
          ],
          nutrition: [
            "Apporto proteico distribuito su 3–4 pasti + snack",
            "Deficit calorico modesto (≈10–15% TDEE) con aggiornamenti bisettimanali",
            "Fibre e idratazione come leve di sazietà",
            "Nessun taglio netto di gruppi alimentari: preferenza su qualità e quantità",
          ],
        },
      },
      {
        id: "p2",
        title: "Ritorno all’attività post-infortunio",
        description: "Progressioni graduali e monitoring del dolore.",
        imageSrc:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        href: "https://www.youtube.com",
        projectDetail: {
          longDescription:
            "Rientro dopo distrazione alla caviglia: priorità a stabilità, range e carico progressivo prima di reintrodurre corsa e salti.",
          gallery: [
            {
              src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
              alt: "Mobilità e rinforzo",
            },
          ],
          objectives: [
            "Ripristinare confidenza nel carico senza picchi di dolore",
            "Simmetria e controllo in movimenti monopodalici",
            "Ritorno a corsa leggera solo dopo test funzionali superati",
          ],
          trainingPlan: [
            "Settimane 1–3: isometrie, propriocezione, carichi leggeri",
            "Settimane 4–6: affondi, step-up, introduzione salti bassi",
            "Settimane 7+: progressione corsa / cambi di direzione",
          ],
          nutrition: [
            "Apporto proteico adeguato per il supporto tissutale",
            "Anti-infiammatorio “soft”: focus su qualità degli grassi e verdure",
            "Integrazione solo se indicata dal medico / nutrizionista",
          ],
        },
      },
      {
        id: "p3",
        title: "Performance atletica",
        description: "Plyometrics e sprint mechanics per sport di squadra.",
        imageSrc:
          "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80",
        href: "https://www.youtube.com",
        projectDetail: {
          longDescription:
            "Atleta di squadra: lavoro su esplosività, meccanica di corsa e capacità di ripetere sprint in partita.",
          gallery: [
            {
              src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
              alt: "Sala attrezzi",
            },
            {
              src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=900&q=80",
              alt: "Allenamento atletico",
            },
          ],
          objectives: [
            "Migliorare tempi su 10–20 m e accelerazione da fermo",
            "Mantenere qualità del gesto sotto fatica",
            "Core e anca come base per cambi di direzione",
          ],
          trainingPlan: [
            "2 sessioni a settimana dedicate a plyometrics e accelerazioni",
            "1 sessione per forza globale (bilanciata al calendario partite)",
            "Deload in settimane con doppia gara",
          ],
          nutrition: [
            "Timing carboidrati attorno alle sessioni ad alta intensità",
            "Idratazione e recupero in giornata con doppia seduta",
            "Adeguamento calorie in base a carico di gara e settimanale",
          ],
        },
      },
    ],
  },
  services: {
    title: "Servizi",
    description: "Cosa possiamo fare insieme — modulare in base al tuo livello.",
    items: [
      {
        id: "s1",
        title: "Personal training 1:1",
        description: "Sessioni su misura in studio o domicilio, feedback real-time e scheda aggiornata.",
        icon: "strength",
      },
      {
        id: "s2",
        title: "Programmazione nutrizionale",
        description: "Strategie alimentari flessibili, non diete da copia-incolla.",
        icon: "nutrition",
      },
      {
        id: "s3",
        title: "Mobilità & prevenzione",
        description: "Lavoro su catene muscolari, stabilità articolare e warm-up intelligenti.",
        icon: "mobility",
      },
      {
        id: "s4",
        title: "Coaching online",
        description: "Videochiamate, check-in e app per loggare allenamenti.",
        icon: "online",
      },
    ],
  },
  plans: {
    title: "Piani",
    description:
      "Scegli il percorso: il bottone verde apre WhatsApp con il piano già indicato nel messaggio.",
    items: [
      {
        id: "plan-start",
        name: "Starter",
        tagline: "Ideale per partire con costanza",
        price: "€190",
        period: "/4 settimane",
        features: [
          "2 sessioni a settimana in studio",
          "Programma integrativo a casa",
          "Check-in chat e aggiustamenti",
        ],
        cta: "Scegli Starter",
        whatsappMessage:
          "Ciao! Vorrei informazioni sul piano STARTER (€190 / 4 settimane). Quando possiamo sentirci?",
      },
      {
        id: "plan-pro",
        name: "Performance",
        tagline: "Il più scelto · risultati e follow-up",
        price: "€290",
        period: "/4 settimane",
        features: [
          "3 sessioni a settimana",
          "Nutrizione applicata (base)",
          "Monitoraggio composizione e foto",
          "Priorità risposta WhatsApp",
        ],
        highlighted: true,
        cta: "Scegli Performance",
        whatsappMessage:
          "Ciao! Mi interessa il piano PERFORMANCE (€290 / 4 settimane). Vorrei capire disponibilità e sede.",
      },
      {
        id: "plan-elite",
        name: "Elite",
        tagline: "Percorso premium su misura",
        price: "Su misura",
        period: "",
        features: [
          "Programma ibrido studio / online",
          "Slot prioritari in agenda",
          "Review tecnica mensile su video",
          "Piano nutrizionale avanzato",
        ],
        cta: "Scegli Elite",
        whatsappMessage:
          "Ciao! Vorrei una proposta per il piano ELITE (su misura): obiettivi, tempistiche e sede.",
      },
    ],
  },
  gallery: {
    title: "Galleria",
    description:
      "Spazi dedicati al training: dalla zona massimali al functional, fino al lavoro su mobilità e recupero. Scorri per vedere l’ambiente in cui ci alleniamo.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
        alt: "Zona rack e bilancieri",
      },
      {
        src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=85",
        alt: "Mobilità e stretching a fine seduta",
      },
      {
        src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=85",
        alt: "Functional training e corpo libero",
      },
      {
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=85",
        alt: "Manubri e selezione pesi",
      },
      {
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=85",
        alt: "Kettlebell e zona accessori",
      },
      {
        src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1600&q=85",
        alt: "Panoramica sala e attrezzature cardio",
      },
    ],
  },
  contact: {
    title: "Contatti",
    description: "Scegli come preferisci: sono raggiungibile su tutti i canali.",
    panelNote: "Ti rispondo appena possibile — in genere entro il giorno lavorativo.",
    hints: {
      whatsapp: "Ideale per domande rapide e disponibilità",
      phone: "Chiamate e messaggi vocali",
      email: "Programmi, preventivi e allegati",
    },
    email: "ciao@alextrainer.it",
    phone: "+39 320 000 0000",
    whatsappPhone: "393200000000",
    whatsappIntroMessage:
      "Ciao! Ti contatto dal sito. Vorrei avere maggiori informazioni. Grazie!",
  },
  social: {
    title: "Social",
    description: "Contenuti quotidiani, tutorial e dietro le quinte dagli allenamenti.",
    links: [
      {
        id: "ig",
        label: "Instagram",
        handle: "@alextrainer",
        href: "https://www.instagram.com/alextrainer/",
        meta: "Reel, tips e community.",
        variant: "instagram",
      },
      {
        id: "tt",
        label: "TikTok",
        handle: "@alextrainer",
        href: "https://www.tiktok.com/@alextrainer",
        meta: "Micro-lezioni e drill veloci.",
        variant: "tiktok",
      },
      {
        id: "yt",
        label: "YouTube",
        handle: "Alex Trainer",
        href: "https://www.youtube.com/@alextrainer",
        meta: "Workout completi e podcast brevi.",
        variant: "youtube",
      },
    ],
  },
  blog: {
    title: "Dal blog",
    description: "Articoli su training, recovery e mindset.",
  },
  footer: {
    line: "Alex Trainer · Personal Training",
    copyright: "© 2026 · Template PT",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "volume-vs-intensita",
    title: "Volume vs intensità: come scegliere",
    excerpt:
      "Una guida pratica per alternare settimane pesanti e leggere senza bruciarti.",
    date: "2026-03-18",
    readTime: "6 min",
    coverSrc:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Il dibattito volume vs intensità non ha un vincitore assoluto: dipende dal tuo livello, dal tempo disponibile e dall’obiettivo.",
      "Per principianti, priorità a tecnica e frequenza moderata. Per intermedi, cicli di 3–5 settimane con RPE guidato funzionano bene.",
      "Monitora sonno e stress: sono le leve che più spesso rendono un programma “giusto” inefficace.",
    ],
  },
  {
    slug: "miti-proteine",
    title: "Miti sulle proteine da sfatare",
    excerpt:
      "Quanto ne serve davvero, timing, e perché la qualità conta più del brand.",
    date: "2026-02-02",
    readTime: "5 min",
    coverSrc:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    body: [
      "La finestra anabolica non è un secondo preciso: distribuire le proteine nel giorno batte un singolo scoop post-workout.",
      "Per la maggior parte delle persone attive, 1.6–2.2 g/kg sono un intervallo sensato — individualizzare in base a fame ed energia.",
      "Le proteine non “spingono il fegato” se sei sano: sono un macronutriente, non un farmaco.",
    ],
  },
  {
    slug: "mobilita-quotidiana",
    title: "7 minuti di mobilità quotidiana",
    excerpt:
      "Una mini-routine per fianchi e torace che puoi fare ovunque.",
    date: "2026-01-12",
    readTime: "4 min",
    coverSrc:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Seleziona 2 esercizi per il bacino e 2 per la torace: 45 secondi ciascuno, 2 giri.",
      "Respira dal naso: favorisce parasimpatico e range di movimento.",
      "La mobilità è skill: ripetizione > intensità.",
    ],
  },
];
