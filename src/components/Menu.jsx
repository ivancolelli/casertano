import { useState } from "react";
import { menuCategories } from "../data/site.js";

function formatPrice(price) {
  return "$" + price;
}

export function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const current = menuCategories.find((cat) => cat.id === activeId);

  if (!current) return null;

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow dark">Il Nostro Menú</p>
          <h2>Pizze & Dolci</h2>
          <p className="section-sub">
            Ingredientes importados de Italia, técnicas napolitanas y el toque
            creativo de nuestra cocina.
          </p>
        </div>

        <div className="menu-tabs">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={activeId === cat.id ? "tab active" : "tab"}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="menu-panel">
          <h3>{current.title}</h3>
          <p className="menu-subtitle">{current.subtitle}</p>

          <div className="menu-list">
            {current.items.map((item) => (
              <div key={item.name} className="menu-item">
                <div>
                  <h4>
                    {item.name}
                    {item.popular && <span className="badge">Popular</span>}
                    {item.signature && <span className="badge firma">Firma</span>}
                  </h4>
                  <p>{item.description}</p>
                </div>
                <span className="price">{formatPrice(item.price)}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="menu-note">
          Precios en MXN. Los miércoles: al comprar 2 pizzas, postre de la casa
          de obsequio.
        </p>
      </div>
    </section>
  );
}
