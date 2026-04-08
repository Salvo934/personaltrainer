import Link from "next/link";
import type { SiteContent } from "@/data/site";

type Props = {
  content: SiteContent;
};

export function SiteFooter({ content }: Props) {
  const ig = content.social.links.find((l) => l.variant === "instagram");
  const yt = content.social.links.find((l) => l.variant === "youtube");

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-brand">{content.footer.line}</p>
        <div className="footer-right">
          <div className="social-links" aria-label="Social">
            {ig ? (
              <Link className="social-link" href={ig.href} target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg className="social-icon-img" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5zm0 2.2a3.3 3.3 0 1 1-3.3 3.3 3.3 3.3 0 0 1 3.3-3.3zm5.25-3.4a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z"
                  />
                </svg>
              </Link>
            ) : null}
            {yt ? (
              <Link className="social-link" href={yt.href} target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg className="social-icon-img" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.7 31.7 0 0 0 .5-5.8 31.7 31.7 0 0 0-.5-5.8zM9.75 15.02v-6l5.5 3-5.5 3z"
                  />
                </svg>
              </Link>
            ) : null}
          </div>
          <span className="footer-copyright">{content.footer.copyright}</span>
        </div>
      </div>
      <div className="footer-credit">
        <span className="footer-credit-label">Prodotto da</span>
        <a
          className="footer-credit-link"
          href="https://katahero.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Katahero — apri il sito in una nuova scheda"
        >
          <span className="footer-credit-brand">Katahero</span>
          <svg className="footer-credit-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none">
            <path
              d="M7 17L17 7M7 7h10v10"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
