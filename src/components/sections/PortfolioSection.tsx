"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import type { PortfolioItem } from "@/data/site";
import { PortfolioProjectModal } from "./PortfolioProjectModal";

type Props = {
  index: string;
  title: string;
  description: string;
  items: PortfolioItem[];
};

export function PortfolioSection({ index, title, description, items }: Props) {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const open = Boolean(selected);

  const openProject = useCallback((item: PortfolioItem) => setSelected(item), []);
  const closeProject = useCallback(() => setSelected(null), []);

  if (items.length === 0) return null;

  const [featured, ...rest] = items;
  const hasFeaturedVideo = Boolean(featured?.youtubeId);
  const total = items.length;

  return (
    <section
      id="portfolio"
      className="section section-highlights portfolio-section"
      data-item-count={total}
      aria-labelledby="portfolio-heading"
    >
      <PortfolioProjectModal item={selected} open={open} onClose={closeProject} />

      <div className="portfolio-ambient" aria-hidden="true" />
      <div className="portfolio-shell">
        <header className="portfolio-header">
          <p className="portfolio-eyebrow">{index}</p>
          <h2 id="portfolio-heading" className="portfolio-title">
            {title}
          </h2>
          <p className="portfolio-lede">{description}</p>
        </header>

        <div className="highlights-layout">
          <div className="highlight-featured">
            {hasFeaturedVideo && featured.youtubeId ? (
              <>
                <div className="embed-wrapper">
                  <iframe
                    title={featured.title}
                    src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}?rel=0&modestbranding=1`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="featured-caption">
                  <h3 className="featured-caption-title">{featured.title}</h3>
                  <p>{featured.description}</p>
                  <div className="portfolio-featured-actions">
                    <button type="button" className="portfolio-project-btn" onClick={() => openProject(featured)}>
                      Apri progetto
                    </button>
                    {featured.href ? (
                      <Link
                        href={featured.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-project-link"
                      >
                        Link esterno ↗
                      </Link>
                    ) : null}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="embed-wrapper">
                  {featured.imageSrc ? (
                    <Image
                      src={featured.imageSrc}
                      alt={featured.title}
                      fill
                      className="hero-poster"
                      sizes="(max-width: 900px) 100vw, 60vw"
                    />
                  ) : null}
                </div>
                <div className="featured-caption">
                  <h3 className="featured-caption-title">{featured.title}</h3>
                  <p>{featured.description}</p>
                  <div className="portfolio-featured-actions">
                    <button type="button" className="portfolio-project-btn" onClick={() => openProject(featured)}>
                      Apri progetto
                    </button>
                    {featured.href ? (
                      <Link
                        href={featured.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-project-link"
                      >
                        Link esterno ↗
                      </Link>
                    ) : null}
                  </div>
                </div>
              </>
            )}
          </div>

          {rest.length > 0 ? (
            <div className="highlight-list">
              {rest.map((item) => {
                const external =
                  item.href ??
                  (item.youtubeId ? `https://www.youtube.com/watch?v=${item.youtubeId}` : null);
                return (
                  <article key={item.id} className="highlight-row">
                    <div className="thumb">
                      {item.youtubeId ? (
                        <Image
                          src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                          alt={item.title}
                          width={320}
                          height={180}
                        />
                      ) : item.imageSrc ? (
                        <Image src={item.imageSrc} alt={item.title} width={320} height={180} />
                      ) : null}
                      <span className="thumb-play" aria-hidden="true">
                        ▶
                      </span>
                    </div>
                    <div className="meta">
                      <h4 className="meta-title">{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="highlight-row-actions">
                        <button type="button" className="portfolio-project-btn portfolio-project-btn--sm" onClick={() => openProject(item)}>
                          Apri progetto
                        </button>
                        {external ? (
                          <a
                            href={external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-row-external"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Apri video / link ↗
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
