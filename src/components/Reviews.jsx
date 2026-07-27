import { reviews, siteConfig } from "../data/site.js";

export function Reviews() {
  return (
    <section id="resenas" className="section reviews">
      <div className="container">
        <div className="section-head light">
          <p className="eyebrow light">Reseñas</p>
          <h2>Lo que dicen nuestros comensales</h2>
          <p className="section-sub light">
            ★★★★★ {siteConfig.rating} · {siteConfig.reviewCount}+ reseñas
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <blockquote key={review.name} className="review-card">
              <p>“{review.text}”</p>
              <cite>{review.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
