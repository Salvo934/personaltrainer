import type { SocialLink } from "@/data/site";
import { SocialPlatformIcon } from "@/components/ui/SocialPlatformIcon";

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
                  <SocialPlatformIcon variant={s.variant} className="social-section-icon-svg" />
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
