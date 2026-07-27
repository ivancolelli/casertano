import { highlights } from "../data/site.js";

export function Highlights() {
  return (
    <section className="section highlights">
      <div className="container">
        <div className="section-head light">
          <p className="eyebrow light">Lo que nos define</p>
          <h2>Autenticidad en cada detalle</h2>
        </div>

        <div className="highlights-grid">
          {highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
