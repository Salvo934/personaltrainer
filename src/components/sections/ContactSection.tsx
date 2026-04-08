import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildTelHref, buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  index: string;
  title: string;
  description: string;
  panelNote: string;
  hints: {
    whatsapp: string;
    phone: string;
    email: string;
  };
  email: string;
  phone: string;
  whatsappPhone: string;
  whatsappIntroMessage: string;
};

export function ContactSection({
  index,
  title,
  description,
  panelNote,
  hints,
  email,
  phone,
  whatsappPhone,
  whatsappIntroMessage,
}: Props) {
  const waUrl = buildWhatsAppUrl(whatsappPhone, whatsappIntroMessage);
  const telHref = buildTelHref(phone);
  const mailHref = `mailto:${email}`;

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="contact-ambient" aria-hidden="true" />
      <div className="contact-shell">
        <header className="contact-header">
          <p className="contact-eyebrow">{index}</p>
          <h2 id="contact-heading" className="contact-title">
            {title}
          </h2>
          <p className="contact-lede">{description}</p>
        </header>

        <div className="contact-panel">
          <div className="contact-panel__shine" aria-hidden="true" />
          <p className="contact-panel__note">{panelNote}</p>

          <ul className="contact-tiles">
            <li>
              <a
                className="contact-tile contact-tile--whatsapp"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apri WhatsApp: ${hints.whatsapp}`}
              >
                <span className="contact-tile__accent" aria-hidden="true" />
                <span className="contact-tile__icon-wrap">
                  <span className="contact-tile__icon contact-tile__icon--whatsapp">
                    <WhatsAppIcon />
                  </span>
                </span>
                <span className="contact-tile__name">WhatsApp</span>
                <span className="contact-tile__hint">{hints.whatsapp}</span>
                <span className="contact-tile__value contact-tile__value--muted">Chat diretta</span>
                <span className="contact-tile__action">
                  Apri WhatsApp
                  <span className="contact-tile__action-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="contact-tile contact-tile--phone"
                href={telHref}
                aria-label={`Chiama il numero ${phone}`}
              >
                <span className="contact-tile__accent" aria-hidden="true" />
                <span className="contact-tile__icon-wrap">
                  <span className="contact-tile__icon">
                    <svg viewBox="0 0 24 24" width={26} height={26} aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      />
                    </svg>
                  </span>
                </span>
                <span className="contact-tile__name">Telefono</span>
                <span className="contact-tile__hint">{hints.phone}</span>
                <span className="contact-tile__value">{phone}</span>
                <span className="contact-tile__action">
                  Chiama ora
                  <span className="contact-tile__action-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="contact-tile contact-tile--email"
                href={mailHref}
                aria-label={`Invia email a ${email}`}
              >
                <span className="contact-tile__accent" aria-hidden="true" />
                <span className="contact-tile__icon-wrap">
                  <span className="contact-tile__icon">
                    <svg viewBox="0 0 24 24" width={26} height={26} aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      />
                    </svg>
                  </span>
                </span>
                <span className="contact-tile__name">Email</span>
                <span className="contact-tile__hint">{hints.email}</span>
                <span className="contact-tile__value contact-tile__value--email">{email}</span>
                <span className="contact-tile__action">
                  Scrivi un messaggio
                  <span className="contact-tile__action-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
