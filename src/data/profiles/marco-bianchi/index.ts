import type { BlogPost, SiteContent } from "../../types";

export const domains = ["marco.katahero.com"];

export const siteContent: SiteContent = {
  enableIntro: false,
  brand: {
    name: "Marco Bianchi",
    tag: "PT",
    avatarSrc:
      "https://images.unsplash.com/photo-1567012477005-6c967e7e8f49?auto=format&fit=crop&w=200&q=80",
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
  ctaLabel: "Inizia",
  ctaHref: "#contact",
  hero: {
    label: "Personal Training · Forza & performance",
    title: "Marco Bianchi",
    bio: "Strength coach · powerlifting · tecnica e numeri",
    tagline: "Più forza, più controllo, zero improvvisazione.",
    primaryCta: { href: "#contact", label: "Prenota una sessione" },
    secondaryCta: { href: "#plans", label: "Vedi i piani" },
    metrics: [
      { label: "CLIENTI", value: "95+" },
      { label: "ANNI", value: "10" },
      { label: "FOCUS", value: "Forza" },
      { label: "ZONA", value: "Milano" },
    ],
    posterSrc:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
  },
  motivationPills: [
    "Tecnica prima del PR.",
    "Carichi che puoi ripetere con qualità.",
    "Recupero programmato come l’allenamento.",
    "Numeri chiari, progressioni sensate.",
  ],
  about: {
    title: "Chi sono",
    description: "Ti affianco su squat, stacco e panca con metodo e video analisi.",
    paragraphs: [
      "Sono strength coach: lavoro con atleti e principianti che vogliono costruire forza in modo sicuro, con progressioni basate su RPE e volumi gestiti.",
      "In palestra o in studio attrezzato per powerlifting: feedback sulle traiettorie, cueing e revisione del programma ogni settimana.",
      "Se cerchi hype senza fondo non sono la persona giusta; se vuoi migliorare i tuoi massimali nel tempo, ci si vede in sala.",
      "Sono il strength coach che ti aiuta a migliorare la tua tecnica e a ottenere i tuoi massimali in modo sicuro e sostenibile.",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description: "Percorsi forza, contenuti tecnici e trasformazioni.",
    items: [
      {
        id: "p1",
        title: "Primo totale 400 kg",
        description: "12 mesi: tecnica squat e gestione picchi — da 320 a 400 kg totalizzati.",
        imageSrc:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        href: "https://www.youtube.com",
        projectDetail: {
          longDescription:
            "Percorso annuale su squat, panca e stacco: periodizzazione, picchi controllati e deload programmati.",
          gallery: [
            {
              src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
              alt: "Powerlifting in palestra",
            },
          ],
          objectives: ["Totale >380 kg senza infortuni", "Bar path e setup panca più ripetibili"],
          trainingPlan: [
            "Mesocicli 4–6 settimane con focus volume o intensità",
            "Accessori mirati su punti deboli (lockout, uscita dal petto)",
            "Test massimali solo in finestre pianificate",
          ],
          nutrition: [
            "Surplus leggero nelle fasi di volume",
            "Proteine ancorate al peso corporeo e ripartizione pasti",
          ],
        },
      },
      {
        id: "p2",
        title: "Workshop tecnica panca",
        description: "Setup, leg drive e path del bilanciere — registrazione disponibile.",
        youtubeId: "9bZkp7q19f0",
        projectDetail: {
          longDescription:
            "Workshop pratico su setup, tensione delle gambe e traiettoria del bilanciere, con checklist da portare in seduta.",
          objectives: ["Uniformare il pre-lift routine", "Ridurre errori di bar path sotto carico"],
          trainingPlan: [
            "Teoria + demo (45 min)",
            "Stazioni guidate con feedback (60 min)",
            "Q&A e materiale riassuntivo",
          ],
          nutrition: [
            "Solo indicazioni generali: timing pasti attorno alle sedute pesanti (se applicabile)",
          ],
        },
      },
    ],
  },
  services: {
    title: "Servizi",
    description: "Cosa possiamo fare insieme.",
    items: [
      {
        id: "s1",
        title: "Coaching 1:1 forza",
        description: "Sessioni su squat, panca, stacco e accessori con feedback immediato.",
        icon: "strength",
      },
      {
        id: "s2",
        title: "Programmazione periodizzata",
        description: "Blocchi di volume, intensità e deload in base a obiettivi e gare.",
        icon: "nutrition",
      },
      {
        id: "s3",
        title: "Video analisi",
        description: "Revisione ripetizioni inviate via app con note e correzioni.",
        icon: "online",
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
    description: "Scrivimi su WhatsApp con il piano che ti interessa.",
    items: [
      {
        id: "plan-strength",
        name: "Strength",
        tagline: "4 sessioni / mese + programma",
        price: "€220",
        period: "/mese",
        features: [
          "1 sessione guidata a settimana",
          "Programma su 4 settimane",
          "Aggiornamento carichi via chat",
        ],
        cta: "Chiedi Strength",
        whatsappMessage:
          "Ciao Marco! Vorrei info sul piano STRENGTH (€220/mese).",
      },
      {
        id: "plan-compete",
        name: "Compete",
        tagline: "Pre-gara e peak",
        price: "€350",
        period: "/mese",
        features: [
          "2 sessioni a settimana",
          "Peak e taper su calendario gara",
          "Supporto WhatsApp prioritario",
        ],
        highlighted: true,
        cta: "Scrivimi per Compete",
        whatsappMessage:
          "Ciao Marco! Mi interessa il piano COMPETE (€350/mese) per preparazione gara.",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    description: "Spazio rack, bilancieri e piastre.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
        alt: "Rack squat",
      },
      {
        src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=1200&q=80",
        alt: "Pesi",
      },
      {
        src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
        alt: "Allenamento",
      },
    ],
  },
  contact: {
    title: "Contatti",
    description: "Milano e online — rispondo in ordine di arrivo.",
    panelNote: "Per disponibilità in settimana, scrivi su WhatsApp.",
    hints: {
      whatsapp: "Disponibilità e domande rapide",
      phone: "Chiamate solo in orario indicato in chat",
      email: "Programmi e collaborazioni",
    },
    email: "marco.bianchi@example.com",
    phone: "+39 340 555 7788",
    whatsappPhone: "393405557788",
    whatsappIntroMessage:
      "Ciao Marco! Ti contatto dal sito per un allenamento / info sui piani.",
  },
  social: {
    title: "Social",
    description: "Tecnica, numeri e dietro le quinte dalle sessioni.",
    links: [
      {
        id: "ig",
        label: "Instagram",
        handle: "@marcobianchi.strength",
        href: "https://www.instagram.com",
        meta: "Reel tecnici e PR.",
        variant: "instagram",
      },
      {
        id: "yt",
        label: "YouTube",
        handle: "Marco Bianchi Strength",
        href: "https://www.youtube.com",
        meta: "Tutorial lunghi e analisi.",
        variant: "youtube",
      },
      {
        id: "tt",
        label: "TikTok",
        handle: "@marcobpt",
        href: "https://www.tiktok.com",
        meta: "Cue veloci e meme da sala.",
        variant: "tiktok",
      },
    ],
  },
  blog: {
    title: "Dal blog",
    description: "Forza, tecnica e programmazione.",
  },
  footer: {
    line: "Marco Bianchi · Strength coaching",
    copyright: "© 2026",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "squat-profondita-e-ciglia",
    title: "Squat: profondità e “ciglia” — cosa controllare",
    excerpt:
      "Tre check visivi prima di aggiungere peso sul bilanciere.",
    date: "2026-03-22",
    readTime: "5 min",
    coverSrc:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    body: [
      "La profondità utile è quella che mantieni con colonna neutra e talloni a terra: non inseguire il parallelismo se perdi tensione.",
      "Le “ciglia” (knee cave) spesso sono un problema di setup o di piede: prova a ruotare leggermente le ginocchia verso l’esterno in discesa.",
      "Filma una serie leggera dal lato: confronta ogni 4 settimane, non ogni sessione.",
    ],
  },
  {
    slug: "deload-quando-e-perche",
    title: "Deload: quando farlo (anche senza sentirti distrutto)",
    excerpt:
      "Volume e intensità calano per una settimana: ecco i segnali utili.",
    date: "2026-02-10",
    readTime: "4 min",
    coverSrc:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Il deload non è solo “riposo”: è un settimana con carichi o volumi ridotti per assorbire il lavoro precedente.",
      "Segnali: RPE più alto del solito con stessi carichi, sonno peggiorato, irritabilità — non serve aspettare il dolore acuto.",
      "Pianifica il deload ogni 4–6 settimane o dopo un blocco di picco, non solo quando sei a terra.",
    ],
  },
  {
    slug: "tecnica-panca-setup-e-tensione",
    title: "Tecnica panca: setup e tensione delle gambe",
    excerpt:
      "Controlla questi due aspetti per un bilanciere più stabile.",
    date: "2026-03-01",
    readTime: "4 min",
    coverSrc:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    body: [
      "Il setup panca è fondamentale per evitare errori di bar path e traiettoria.",
      "La tensione delle gambe deve essere uniforme per evitare stress articolari.",
      "Controlla questi due aspetti per un bilanciere più stabile.",
    ],
  },
];
