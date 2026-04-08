import type { SocialLink } from "@/data/site";

function TikTokIcon() {
  return (
    <svg className="social-section-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="social-section-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.7 31.7 0 0 0 .5-5.8 31.7 31.7 0 0 0-.5-5.8zM9.75 15.02v-6l5.5 3-5.5 3z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="social-section-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5zm0 2.2a3.3 3.3 0 1 1-3.3 3.3 3.3 3.3 0 0 1 3.3-3.3zm5.25-3.4a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="social-section-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 22v-8.2h2.7l.5-3.2H13.5V8.6c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.5H7v3.2h2.6V22h4z"
      />
    </svg>
  );
}

type Props = {
  index: string;
  title: string;
  description: string;
  links: SocialLink[];
};

export function SocialSection({ index, title, description, links }: Props) {
  const n = links.length;
  return (
    <section id="social" className="section social-section" data-item-count={n} aria-labelledby="social-heading">
      <div className="social-ambient" aria-hidden="true" />
      <div className="social-shell">
        <header className="social-header">
          <p className="social-eyebrow">{index}</p>
          <h2 id="social-heading" className="social-title">
            {title}
          </h2>
          <p className="social-lede">{description}</p>
        </header>

        <ul className="social-section-list" data-item-count={n}>
          {links.map((s) => (
            <li key={s.id}>
              <a
                className={`social-section-card social-section-card--${s.variant}`}
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-section-card-accent" aria-hidden="true" />
                <span className="social-section-icon-wrap" aria-hidden="true">
                  {s.variant === "instagram" ? <InstagramIcon /> : null}
                  {s.variant === "tiktok" ? <TikTokIcon /> : null}
                  {s.variant === "youtube" ? <YouTubeIcon /> : null}
                  {s.variant === "facebook" ? <FacebookIcon /> : null}
                </span>
                <span className="social-section-label">{s.label}</span>
                <span className="social-section-handle">{s.handle}</span>
                <p className="social-section-meta">{s.meta}</p>
                <div className="social-section-faux-strip" aria-hidden="true">
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                </div>
                <span className="social-section-cta">
                  Apri il profilo
                  <span className="social-section-cta-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
