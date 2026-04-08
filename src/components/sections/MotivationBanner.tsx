type Props = {
  pills: string[];
};

export function MotivationBanner({ pills }: Props) {
  const loop = [...pills, ...pills];
  const n = pills.length;
  return (
    <section className="motivation-banner" aria-label="Messaggi motivazionali" data-pill-count={n}>
      <div className="motivation-marquee">
        <div className="motivation-viewport">
          <div className="motivation-track">
            {loop.map((text, i) => (
              <span key={`${text}-${i}`} className="motivation-pill">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
