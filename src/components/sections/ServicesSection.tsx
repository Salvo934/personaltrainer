import type { ServiceItem } from "@/data/site";

function ServiceIcon({ icon }: { icon: ServiceItem["icon"] }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24" as const, "aria-hidden": true as const };
  switch (icon) {
    case "strength":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.65">
          <path d="M4 10h3v4H4zM17 10h3v4h-3z" strokeLinejoin="round" />
          <path d="M7 12h10" strokeLinecap="round" />
          <path d="M2 12H1M23 12h-1" strokeLinecap="round" />
        </svg>
      );
    case "nutrition":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 3c-2.8 0-5 2.1-5 4.7 0 3.5 5 8.3 5 8.3s5-4.8 5-8.3C17 5.1 14.8 3 12 3zm0 6.2a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      );
    case "mobility":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.65">
          <circle cx="12" cy="12" r="8" />
          <path d="M8 12h8M12 8v8" strokeLinecap="round" />
        </svg>
      );
    case "online":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.65">
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

type Props = {
  index: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

export function ServicesSection({ index, title, description, items }: Props) {
  const n = items.length;
  return (
    <section
      id="services"
      className="section services-section"
      data-item-count={n}
      aria-labelledby="services-heading"
    >
      <div className="services-ambient" aria-hidden="true" />
      <div className="services-shell">
        <header className="services-header">
          <p className="services-eyebrow">{index}</p>
          <h2 id="services-heading" className="services-title">
            {title}
          </h2>
          <p className="services-lede">{description}</p>
        </header>

        <div className="services-grid" data-item-count={n}>
          {items.map((s) => (
            <article key={s.id} className="service-card">
              <div className="service-icon-wrap" aria-hidden="true">
                <div className="service-icon">
                  <ServiceIcon icon={s.icon} />
                </div>
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
