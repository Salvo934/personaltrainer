"use client";

import Image from "next/image";
import { useCallback, useEffect, useId } from "react";
import type { PortfolioItem } from "@/data/site";

type Props = {
  item: PortfolioItem | null;
  open: boolean;
  onClose: () => void;
};

export function PortfolioProjectModal({ item, open, onClose }: Props) {
  const titleId = useId();
  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open || !item) return null;

  const d = item.projectDetail;
  const intro = d?.longDescription?.trim() || item.description;
  const gallery = d?.gallery ?? [];
  const cover =
    item.imageSrc ?? (item.youtubeId ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg` : null);

  return (
    <div
      className="portfolio-modal-backdrop"
      role="presentation"
      onClick={close}
      aria-hidden={!open}
    >
      <div
        className="portfolio-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="portfolio-modal-header">
          <h2 id={titleId} className="portfolio-modal-title">
            {item.title}
          </h2>
          <button type="button" className="portfolio-modal-close" onClick={close} aria-label="Chiudi">
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="portfolio-modal-body">
          {item.youtubeId ? (
            <div className="portfolio-modal-embed">
              <div className="portfolio-modal-embed-inner">
                <iframe
                  title={`Video: ${item.title}`}
                  src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ) : cover ? (
            <div className="portfolio-modal-cover">
              <Image
                src={cover}
                alt={item.title}
                fill
                className="portfolio-modal-cover-img"
                sizes="(max-width: 900px) 100vw, min(960px, 92vw)"
              />
            </div>
          ) : null}

          {gallery.length > 0 ? (
            <div className="portfolio-modal-gallery">
              <h3 className="portfolio-modal-section-label">Galleria</h3>
              <div className="portfolio-modal-gallery-track">
                {gallery.map((img, i) => (
                  <div key={`${img.src}-${i}`} className="portfolio-modal-gallery-item">
                    <Image src={img.src} alt={img.alt} width={640} height={420} className="portfolio-modal-gallery-img" sizes="(max-width: 900px) 72vw, 320px" />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {intro.trim() ? (
            <section className="portfolio-modal-section">
              <h3 className="portfolio-modal-section-label">Descrizione</h3>
              <div className="portfolio-modal-prose">
                {intro
                  .split("\n")
                  .map((p) => p.trim())
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>
            </section>
          ) : null}

          {d?.objectives && d.objectives.length > 0 ? (
            <section className="portfolio-modal-section portfolio-modal-section--card">
              <h3 className="portfolio-modal-section-label">Obiettivi</h3>
              <ul className="portfolio-modal-list">
                {d.objectives.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {d?.trainingPlan && d.trainingPlan.length > 0 ? (
            <section className="portfolio-modal-section portfolio-modal-section--card">
              <h3 className="portfolio-modal-section-label">Scheda allenamento</h3>
              <ul className="portfolio-modal-list">
                {d.trainingPlan.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {d?.nutrition && d.nutrition.length > 0 ? (
            <section className="portfolio-modal-section portfolio-modal-section--card portfolio-modal-section--nutrition">
              <h3 className="portfolio-modal-section-label">Nutrizione</h3>
              <ul className="portfolio-modal-list portfolio-modal-list--nutrition">
                {d.nutrition.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {item.href ? (
            <p className="portfolio-modal-footer-link">
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="portfolio-modal-external">
                Apri risorsa collegata
                <span className="portfolio-modal-external-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
