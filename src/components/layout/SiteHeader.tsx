"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem, SocialLink } from "@/data/site";
import { SocialPlatformIcon } from "@/components/ui/SocialPlatformIcon";

type Props = {
  brandName: string;
  brandTag: string;
  avatarSrc: string;
  nav: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  socialLinks?: SocialLink[];
};

export function SiteHeader({
  brandName,
  brandTag,
  avatarSrc,
  nav,
  ctaLabel,
  ctaHref,
  socialLinks = [],
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link
            href="/"
            className="brand"
            aria-label={`${brandName} · ${brandTag}`}
          >
            <span className="brand-avatar-card" aria-hidden="true">
              <Image
                className="brand-avatar"
                src={avatarSrc}
                alt=""
                width={56}
                height={56}
                sizes="(max-width: 900px) 52px, 44px"
                priority
              />
            </span>
            <span className="brand-text">
              <span className="brand-line">
                <span className="brand-name">{brandName}</span>
                <span className="brand-hash">#{brandTag}</span>
              </span>
              <span className="brand-number">{brandTag}</span>
            </span>
          </Link>

          <button
            type="button"
            className={`mobile-nav-toggle${mobileOpen ? " open" : ""}`}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="mobile-nav-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav className="main-nav" aria-label="Menu principale">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href={ctaHref} className="nav-cta">
            {ctaLabel}
          </Link>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principale (mobile)"
        aria-hidden={!mobileOpen}
      >
        <button type="button" className="mobile-nav-backdrop" tabIndex={-1} aria-hidden="true" onClick={closeMobile} />
        <div className="mobile-nav-panel">
          <div className="mobile-nav-sheet">
            <header className="mobile-nav-top">
              <div className="mobile-nav-heading">
                <p className="mobile-nav-eyebrow">Menu</p>
                <p className="mobile-nav-headline">
                  <span className="mobile-nav-headline-name">{brandName}</span>
                  <span className="mobile-nav-headline-hash">#{brandTag}</span>
                </p>
              </div>
              <button type="button" className="mobile-nav-close" aria-label="Chiudi menu" onClick={closeMobile}>
                <span className="mobile-nav-close-icon" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </header>
            <nav className="mobile-nav" aria-label="Menu principale mobile">
              <ul className="mobile-nav-list">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="mobile-nav-link" onClick={closeMobile}>
                      <span className="mobile-nav-link-label">{item.label}</span>
                      <span className="mobile-nav-chevron" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              {socialLinks.length > 0 ? (
                <div className="mobile-nav-social-block">
                  <p className="mobile-nav-section-title" id="mobile-nav-social-heading">
                    Social
                  </p>
                  <ul
                    className="mobile-nav-social-icons"
                    aria-labelledby="mobile-nav-social-heading"
                  >
                    {socialLinks.map((s) => (
                      <li key={s.id}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mobile-nav-social-btn mobile-nav-social-btn--${s.variant}`}
                          aria-label={`${s.label} — ${s.handle}`}
                          title={`${s.handle}`}
                          onClick={closeMobile}
                        >
                          <SocialPlatformIcon variant={s.variant} className="mobile-nav-social-icon-svg" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </nav>
            <div className="mobile-nav-footer">
              <Link href={ctaHref} className="mobile-nav-cta" onClick={closeMobile}>
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
