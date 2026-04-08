type Props = {
  index: string;
  title: string;
  description: string;
};

export function SectionHeader({ index, title, description }: Props) {
  return (
    <header className="section-header">
      <span className="section-index" aria-hidden="true">
        {index}
      </span>
      <div className="section-header-text">
        <h2 className="section-title">{title}</h2>
        <p className="section-desc">{description}</p>
      </div>
    </header>
  );
}
