import Image from "next/image";
import type { GalleryImage } from "@/data/site";

type Props = {
  index: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

function GalleryTrackSet({
  images,
  setId,
  ariaHidden,
}: {
  images: GalleryImage[];
  setId: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className="gallery-track-set" aria-hidden={ariaHidden}>
      {images.map((img, i) => (
        <figure key={`${setId}-${i}-${img.src}`} className="photo-card gallery-item">
          <Image
            className="photo-img"
            src={img.src}
            alt={img.alt}
            width={880}
            height={605}
            sizes="(max-width: 900px) 85vw, 440px"
          />
          {img.alt ? (
            <figcaption className="gallery-item-caption" aria-hidden="true">
              <span className="gallery-item-caption-text">{img.alt}</span>
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

export function GallerySection({ index, title, description, images }: Props) {
  const n = images.length;
  return (
    <section
      id="gallery"
      className="section gallery-section"
      data-item-count={n}
      aria-labelledby="gallery-heading"
    >
      <div className="gallery-ambient" aria-hidden="true" />
      <div className="gallery-shell">
        <header className="gallery-header">
          <p className="gallery-eyebrow">{index}</p>
          <h2 id="gallery-heading" className="gallery-title">
            {title}
          </h2>
          <p className="gallery-lede">{description}</p>
        </header>

        <div className="gallery-frame">
          <div className="gallery-scroll" aria-label="Galleria immagini" data-item-count={n}>
            <div className="gallery-track">
              <GalleryTrackSet images={images} setId="a" />
              <GalleryTrackSet images={images} setId="b" ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
