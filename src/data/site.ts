/**
 * Tipi e contenuto sito del PT attivo.
 *
 * Profilo attivo (primo che vale):
 * 1. Cookie `pt-profile` — impostato con `?pt=<slug>` (es. da `/dashboard`)
 * 2. `NEXT_PUBLIC_PT_PROFILE` in `.env.local`
 * 3. Default `alex-trainer`
 *
 * Dati: `src/data/profiles/<slug>/`.
 */

export * from "./types";
export { getActiveProfileId, getProfileBundle } from "./profile-server";
export { listProfiles } from "./profile-registry";
