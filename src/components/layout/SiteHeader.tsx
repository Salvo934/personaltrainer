"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/data/site";

type Props = {
  brandName: string;
  brandTag: string;
  avatarSrc: string;
  nav: NavItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function SiteHeader({ brandName, brandTag, avatarSrc, nav, ctaLabel, ctaHref }: Props) {
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
          <Link href="/" className="brand">
            <span className="brand-avatar-card" aria-hidden="true">
              <Image
                className="brand-avatar"
                src={avatarSrc}
                alt=""
                width={44}
                height={44}
                sizes="44px"
                priority
              />
            </span>
            <span className="brand-text">
              <span className="brand-name">{brandName}</span>
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
          <div className="mobile-nav-panel-accent" aria-hidden="true" />
          <div className="mobile-nav-top">
            <div className="mobile-nav-brand">
              <span className="mobile-nav-brand-avatar" aria-hidden="true">
                <Image
                  className="mobile-nav-brand-img"
                  src={avatarSrc}
                  alt=""
                  width={40}
                  height={40}
                  sizes="40px"
                />
              </span>
              <div className="mobile-nav-brand-text">
                <span className="mobile-nav-kicker">Navigazione</span>
                <span className="mobile-nav-title">{brandName}</span>
              </div>
            </div>
            <button type="button" className="mobile-nav-close" aria-label="Chiudi menu" onClick={closeMobile}>
              <span className="mobile-nav-close-icon" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Menu principale mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={closeMobile}
              >
                <span className="mobile-nav-link-label">{item.label}</span>
                <span className="mobile-nav-link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
            <Link href={ctaHref} className="mobile-nav-cta" onClick={closeMobile}>
              <span>{ctaLabel}</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
