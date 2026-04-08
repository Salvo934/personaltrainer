type Props = {
  index: string;
  title: string;
  description: string;
  paragraphs: string[];
};

export function AboutSection({ index, title, description, paragraphs }: Props) {
  const n = paragraphs.length;
  return (
    <section
      id="about"
      className="section about-section"
      data-paragraph-count={n}
      aria-labelledby="about-heading"
    >
      <div className="about-ambient" aria-hidden="true" />
      <div className="about-shell">
        <header className="about-header">
          <p className="about-eyebrow">{index}</p>
          <h2 id="about-heading" className="about-title">
            {title}
          </h2>
          <p className="about-lede">{description}</p>
        </header>

        <div className="about-columns" data-paragraph-count={n}>
          {paragraphs.map((p, i) => (
            <article key={i} className="about-card">
              <span className="about-card-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="about-card-text">{p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
