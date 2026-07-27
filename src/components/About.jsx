export function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about-grid">
        <div>
          <p className="eyebrow dark">Nuestra Historia</p>
          <h2>El alma de Nápoles en Monterrey</h2>
          <p>
            Casertano abrió sus puertas en 2025 de la mano del Maestro Pizzaiolo{" "}
            <strong>Paolo</strong>, con una misión clara: traer la auténtica
            pizza napoletana a Monterrey sin compromisos.
          </p>
          <p>
            Cada pizza nace de una masa madre fermentada durante más de{" "}
            <strong>50 horas</strong>, horneada en un horno de leña importado de
            Italia, y coronada con ingredientes DOP: Parmigiano Reggiano,
            prosciutto di Parma, burrata fresca y aceite extra virgen.
          </p>
          <p>
            Nuestro espacio combina estética italiana tradicional con un
            concepto de <em>open kitchen</em>. Un lugar íntimo, acogedor y
            familiar — como comer en casa de un napoletano.
          </p>
        </div>

        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80"
            alt="Horno napoletano"
          />
          <div className="about-badge">
            <strong>2025</strong>
            <span>Año de apertura</span>
          </div>
        </div>
      </div>
    </section>
  );
}
