import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import { getProfileBundle } from "@/data/site";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { defaultSiteDescription, getRequestMetadataBase } from "@/lib/seo";

const fontDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const fontBody = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

export async function generateMetadata(): Promise<Metadata> {
  const { siteContent } = await getProfileBundle();
  const base = await getRequestMetadataBase();
  const name = siteContent.brand.name;
  const description = defaultSiteDescription(siteContent);

  return {
    metadataBase: base,
    title: `${name} · Personal Training`,
    description,
    applicationName: name,
    formatDetection: { telephone: true, email: true },
    openGraph: {
      type: "website",
      siteName: name,
      locale: siteContent.seo?.locale ?? "it_IT",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
