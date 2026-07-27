import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "../data/site.js";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <a href="#inicio" className="logo">
          <span className="logo-name">Casertano</span>
          <span className="logo-tag">Pizzería Napoletana</span>
        </a>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#visitanos" className="btn-reservar">
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            type="button"
            className="menu-close"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            ✕
          </button>

          <nav>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
            {siteConfig.phoneDisplay}
          </a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
            @casertanomx
          </a>
        </div>
      )}
    </>
  );
}
