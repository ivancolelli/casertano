import { galleryImages, siteConfig } from "../data/site.js";

export function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow dark">Galería</p>
          <h2>Momentos Casertano</h2>
          <p className="section-sub">
            Síguenos en{" "}
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              @casertanomx
            </a>{" "}
            para ver más
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
