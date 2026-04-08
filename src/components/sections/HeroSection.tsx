"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { HeroContent } from "@/data/site";

type Props = {
  hero: HeroContent;
};

const MOBILE_MAX = "(max-width: 900px)";

function buildVideoSources(hero: HeroContent) {
  const d = hero.heroVideoDesktop;
  const m = hero.heroVideoMobile;
  if (d && m) {
    return (
      <>
        <source src={m} media={MOBILE_MAX} type="video/mp4" />
        <source src={d} type="video/mp4" />
      </>
    );
  }
  if (m) {
    return <source src={m} type="video/mp4" />;
  }
  if (d) {
    return <source src={d} type="video/mp4" />;
  }
  return null;
}

export function HeroSection({ hero }: Props) {
  const [videoOk, setVideoOk] = useState(true);
  const sources = buildVideoSources(hero);
  const showVideo = Boolean(sources) && videoOk;

  return (
    <section
      id="hero"
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-section-bg" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-label">{hero.label}</p>
          <h1 id="hero-heading" className="hero-title">
            {hero.title}
          </h1>
          <p className="hero-bio">{hero.bio}</p>
          <p className="hero-tagline">{hero.tagline}</p>
          <div className="hero-actions">
            <Link href={hero.primaryCta.href} className="primary-btn">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="ghost-btn">
              {hero.secondaryCta.label}
            </Link>
          </div>
          {hero.metrics.length > 0 ? (
            <ul className="hero-metrics" aria-label="Numeri in evidenza">
              {hero.metrics.map((m) => (
                <li key={m.label} className="hero-metric">
                  <span className="hero-metric-label">{m.label}</span>
                  <span className="hero-metric-value">{m.value}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="hero-media" aria-hidden="true">
          <div className="hero-video-wrap">
            <Image
              className="hero-poster"
              src={hero.posterSrc}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              priority
            />
            {showVideo ? (
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={hero.posterSrc}
                onError={() => setVideoOk(false)}
              >
                {sources}
              </video>
            ) : null}
            <div className="hero-video-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
