"use client";

import { useState } from "react";
import type { BlogPost, SiteContent } from "@/data/site";
import { IntroOverlay } from "@/components/layout/IntroOverlay";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { MotivationBanner } from "@/components/sections/MotivationBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialSection } from "@/components/sections/SocialSection";

type Props = {
  siteContent: SiteContent;
  blogPreviewPosts: BlogPost[];
};

export function HomePageClient({ siteContent: c, blogPreviewPosts }: Props) {
  const [introDone, setIntroDone] = useState(!c.enableIntro);

  return (
    <>
      {c.enableIntro && !introDone ? (
        <IntroOverlay
          brandLine={`${c.brand.name} · ${c.brand.tag}`}
          onDone={() => setIntroDone(true)}
        />
      ) : null}

      <div className={introDone ? "site-visible" : "site-hidden"}>
        <div className="site">
          <SiteHeader
            brandName={c.brand.name}
            brandTag={c.brand.tag}
            avatarSrc={c.brand.avatarSrc}
            nav={c.nav}
            ctaLabel={c.ctaLabel}
            ctaHref={c.ctaHref}
          />

          <main>
            <HeroSection hero={c.hero} />
            <MotivationBanner pills={c.motivationPills} />
            <AboutSection
              index="01"
              title={c.about.title}
              description={c.about.description}
              paragraphs={c.about.paragraphs}
            />
            <PortfolioSection
              index="02"
              title={c.portfolio.title}
              description={c.portfolio.description}
              items={c.portfolio.items}
            />
            <ServicesSection
              index="03"
              title={c.services.title}
              description={c.services.description}
              items={c.services.items}
            />
            <PlansSection
              index="04"
              title={c.plans.title}
              description={c.plans.description}
              items={c.plans.items}
              brandName={c.brand.name}
              whatsappPhone={c.contact.whatsappPhone}
            />
            <GallerySection
              index="05"
              title={c.gallery.title}
              description={c.gallery.description}
              images={c.gallery.images}
            />
            <BlogPreviewSection
              index="06"
              title={c.blog.title}
              description={c.blog.description}
              posts={blogPreviewPosts}
            />
            <ContactSection
              index="07"
              title={c.contact.title}
              description={c.contact.description}
              panelNote={c.contact.panelNote}
              hints={c.contact.hints}
              email={c.contact.email}
              phone={c.contact.phone}
              whatsappPhone={c.contact.whatsappPhone}
              whatsappIntroMessage={c.contact.whatsappIntroMessage}
            />
            {c.social.links.length > 0 ? (
              <SocialSection
                index="08"
                title={c.social.title}
                description={c.social.description}
                links={c.social.links}
              />
            ) : null}
          </main>

          <SiteFooter content={c} />
        </div>
      </div>
    </>
  );
}
