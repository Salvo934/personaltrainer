# Profili PT (dati sito)

Ogni **cartella** = un personal trainer. Il nome della cartella (slug, es. `mario-verdi`) è l’id che usi in ambiente.

## Struttura

```
profiles/
├── README.md                 ← questo file
├── alex-trainer/             ← PT “principale” (default)
│   └── index.ts              ← siteContent + blogPosts
├── esempio-secondo/          ← esempio minimo
│   └── index.ts
├── marco-bianchi/            ← esempio strength / Milano
│   └── index.ts
└── tuo-nuovo-pt/             ← aggiungi cartelle qui
    └── index.ts
```

## Aggiungere un nuovo PT

1. Copia la cartella `esempio-secondo` e rinominala (solo lettere minuscole, numeri e trattini).
2. Modifica `index.ts` (dati del sito e articoli blog).
3. In `index.ts`, esporta anche `domains` con i domini del PT:
   `export const domains = ["tuodominio.it", "www.tuodominio.it"];`
4. In `src/data/profile-registry.ts`: import del modulo e una riga in `PROFILE_REGISTRY` con la **stessa stringa** del nome cartella.
5. Imposta `NEXT_PUBLIC_PT_PROFILE=nome-cartella` in `.env.local` o sul hosting (default se non c’è cookie).

## Domini personalizzati (deploy)

Per gestire molti domini in modo ordinato, definisci i domini direttamente in ogni profilo (`src/data/profiles/<slug>/index.ts`).

Esempio:

```ts
export const domains = ["alextrainer.it", "www.alextrainer.it"];
```

In alternativa (o come override rapido in deploy) puoi usare `PT_PROFILE_DOMAINS`:

```env
PT_PROFILE_DOMAINS=marcobianchi.it:marco-bianchi,alextrainer.it:alex-trainer
```

- La chiave a sinistra e il dominio (senza protocollo).
- Il valore a destra deve essere uno slug presente in `PROFILE_REGISTRY`.
- Se un dominio esiste sia nel profilo che in `PT_PROFILE_DOMAINS`, vince l'env.
- Il mapping dominio ha priorità sul cookie `pt-profile`, cosi ogni dominio mostra il proprio sito anche se il browser aveva salvato un altro PT.

## Anteprima in locale

Apri **`/dashboard`** nel browser (es. `http://localhost:3001/dashboard`): vedi tutti i PT registrati con pulsanti **Apri sito** e **Blog**. I link usano `?pt=<slug>`: il middleware salva il profilo nel cookie e puoi navigare il sito con quel PT senza modificare `.env` a ogni prova.

Gli asset in `public/` restano condivisi; se un PT ha immagini proprie, puoi aggiungere sottocartelle tipo `public/pt/nome-cartella/…` e referenziarle negli URL in `index.ts`.
