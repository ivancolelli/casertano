import { navLinks, siteConfig } from "../data/site.js";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">Casertano</p>
          <p>
            Pizzería Napoletana Auténtica
            <br />
            Monterrey, Nuevo León
          </p>
        </div>

        <div>
          <strong>Navegación</strong>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Contacto</strong>
          <ul>
            <li>{siteConfig.address.full}</li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                @casertanomx
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Casertano. Todos los derechos reservados.</p>
        <p>Pizza napoletana certificada APN · Masa madre · Horno italiano</p>
      </div>
    </footer>
  );
}
