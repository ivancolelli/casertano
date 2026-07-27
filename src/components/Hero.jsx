import { siteConfig } from "../data/site.js";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="eyebrow">Monterrey, Nuevo León</p>
        <h1>Casertano</h1>
        <p className="hero-text">
          {siteConfig.tagline}. Masa madre, horno italiano y la pasión del
          Maestro Pizzaiolo Paolo.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary">
            Ver Menú
          </a>
          <a href="#visitanos" className="btn btn-outline">
            Cómo Llegar
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>50+</strong>
            <span>Horas de fermentación</span>
          </div>
          <div>
            <strong>{siteConfig.rating}</strong>
            <span>{siteConfig.reviewCount}+ reseñas</span>
          </div>
          <div>
            <strong>APN</strong>
            <span>Certificación napoletana</span>
          </div>
        </div>
      </div>
    </section>
  );
}
