import { hours, siteConfig } from "../data/site.js";

export function Visit() {
  return (
    <section id="visitanos" className="section visit">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow dark">Visítanos</p>
          <h2>Te esperamos</h2>
        </div>

        <div className="visit-grid">
          <div className="visit-info">
            <div className="visit-row">
              <strong>Dirección</strong>
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.neighborhood}, {siteConfig.address.zip}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}
              </p>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps →
              </a>
            </div>

            <div className="visit-row">
              <strong>Teléfono</strong>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="visit-row">
              <strong>Instagram</strong>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                @casertanomx
              </a>
            </div>

            <div className="visit-row">
              <strong>Delivery</strong>
              <div className="delivery-links">
                <a
                  href={siteConfig.delivery.uberEats}
                  target="_blank"
                  rel="noreferrer"
                >
                  Uber Eats
                </a>
                <a
                  href={siteConfig.delivery.rappi}
                  target="_blank"
                  rel="noreferrer"
                >
                  Rappi
                </a>
              </div>
            </div>
          </div>

          <div className="visit-hours">
            <strong>Horarios</strong>
            <ul>
              {hours.map((day) => (
                <li key={day.day}>
                  <span>{day.day}</span>
                  <span>
                    {day.hours}
                    {day.highlight ? ` · ${day.highlight}` : ""}
                  </span>
                </li>
              ))}
            </ul>
            <p className="ticket">
              Ticket promedio: ~${siteConfig.averageTicket} MXN por persona
            </p>
          </div>
        </div>

        <iframe
          className="map"
          title="Ubicación de Casertano"
          src="https://maps.google.com/maps?q=Av.+La+Luz+100,+Pedregal+del+Vergel,+Monterrey&hl=es&z=16&output=embed"
          loading="lazy"
        />
      </div>
    </section>
  );
}
