import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { PlanItem } from "@/data/site";

type Props = {
  index: string;
  title: string;
  description: string;
  items: PlanItem[];
  brandName: string;
  whatsappPhone: string;
};

export function PlansSection({ index, title, description, items, brandName, whatsappPhone }: Props) {
  const n = items.length;
  return (
    <section
      id="plans"
      className="section plans-section"
      data-item-count={n}
      aria-labelledby="plans-heading"
    >
      <div className="plans-ambient" aria-hidden="true" />
      <div className="plans-shell">
        <header className="plans-header">
          <p className="plans-eyebrow">{index}</p>
          <h2 id="plans-heading" className="plans-title">
            {title}
          </h2>
          <p className="plans-lede">{description}</p>
        </header>

        <p className="plans-note">
          Con un tap apri la chat: il messaggio include già il nome del piano. Puoi modificarlo prima di
          inviare.
        </p>

        <div className="plans-grid" data-item-count={n}>
          {items.map((plan) => {
            const message = `${brandName} — ${plan.whatsappMessage}`;
            const waUrl = buildWhatsAppUrl(whatsappPhone, message);
            return (
              <article
                key={plan.id}
                className={`plan-card ${plan.highlighted ? "plan-card--highlight" : ""}`}
              >
                {plan.highlighted ? (
                  <span className="plan-badge">Consigliato</span>
                ) : null}
                <div className="plan-card-top">
                  <h3 className="plan-name">{plan.name}</h3>
                  {plan.tagline ? <p className="plan-tagline">{plan.tagline}</p> : null}
                </div>
                <p className="plan-price">
                  {plan.price}{" "}
                  {plan.period ? <small>{plan.period}</small> : null}
                </p>
                <ul className="plan-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plan-cta plan-cta--primary"
                >
                  <span className="plan-cta-label">{plan.cta}</span>
                  <span className="plan-cta-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
