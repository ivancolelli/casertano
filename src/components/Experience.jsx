const experiences = [
  {
    title: "Barra del Pizzaiolo",
    description:
      "Siéntate frente al horno y vive la experiencia completa: ver la masa estirarse, los ingredientes colocarse y la pizza salir del fuego en segundos.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
  },
  {
    title: "Terraza al Aire Libre",
    description:
      "Disfruta de nuestras pizzas en un ambiente relajado al aire libre. Perfecto para tardes en familia o cenas íntimas en pareja.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    title: "Música & Ambiente Italiano",
    description:
      "Música italiana, iluminación cálida y un diseño que transporta a las calles de Nápoles. Cada detalle pensado para tu comodidad.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow dark">La Experiencia</p>
          <h2>Más que una pizza</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article key={item.title} className="experience-card">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="apn-box">
          <p className="eyebrow light">Certificación Oficial</p>
          <h3>Associazione Pizzaiuoli Napoletani</h3>
          <p>
            Casertano está certificado por la APN, la asociación que regula la
            auténtica pizza napoletana en el mundo. Fuera de Nápoles, solo
            existen alrededor de 100 establecimientos con esta distinción.
          </p>
        </div>
      </div>
    </section>
  );
}
