import Image from "next/image";
import Link from "next/link";
import { listProfiles } from "@/data/site";
import { PT_PROFILE_QUERY } from "@/data/pt-profile-constants";

export const metadata = {
  title: "Dashboard PT · Anteprima locali",
  description: "Elenco profili personal trainer e link per aprirli in locale.",
};

export default function DashboardPage() {
  const profiles = listProfiles();

  return (
    <div className="pt-dashboard">
      <header className="pt-dashboard-header">
        <p className="pt-dashboard-kicker">Template PT</p>
        <h1 className="pt-dashboard-title">Dashboard profili</h1>
        <p className="pt-dashboard-lead">
          Scegli un PT e apri il sito in locale. Il link imposta il profilo attivo (cookie) fino al
          prossimo cambio.
        </p>
      </header>

      <div className="pt-dashboard-grid">
        {profiles.map((p) => (
          <article key={p.id} className="pt-dashboard-card">
            <div className="pt-dashboard-card-media">
              <Image
                src={p.avatarSrc}
                alt=""
                fill
                sizes="120px"
                className="photo-img"
              />
            </div>
            <div className="pt-dashboard-card-body">
              <h2 className="pt-dashboard-card-name">{p.name}</h2>
              <p className="pt-dashboard-card-tagline">{p.tagline}</p>
              <p className="pt-dashboard-card-bio">{p.bio}</p>
              <p className="pt-dashboard-card-slug">
                <code>{p.id}</code>
              </p>
              <div className="pt-dashboard-card-actions">
                <Link
                  href={`/?${PT_PROFILE_QUERY}=${encodeURIComponent(p.id)}`}
                  className="pt-dashboard-btn pt-dashboard-btn-primary"
                >
                  Apri sito
                </Link>
                <Link
                  href={`/blog?${PT_PROFILE_QUERY}=${encodeURIComponent(p.id)}`}
                  className="pt-dashboard-btn pt-dashboard-btn-ghost"
                >
                  Blog
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="pt-dashboard-footer">
        <p>
          Aggiungi profili in <code>src/data/profiles/</code> e registrali in{" "}
          <code>profile-registry.ts</code>.
        </p>
        <p>
          <Link href="/" className="pt-dashboard-back">
            ← Torna al sito (profilo attuale)
          </Link>
        </p>
      </footer>
    </div>
  );
}
