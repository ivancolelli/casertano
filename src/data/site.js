export const siteConfig = {
  name: "Casertano",
  tagline: "Pizzería Napoletana Auténtica",
  description:
    "Pizza napoletana certificada con masa madre y más de 50 horas de fermentación. Horno importado de Italia, ingredientes DOP y la pasión del Maestro Pizzaiolo Paolo en Monterrey.",
  url: "https://casertano.mx",
  phone: "+52 81 1086 7758",
  phoneDisplay: "(81) 1086 7758",
  email: "hola@casertano.mx",
  instagram: "https://www.instagram.com/casertanomx/",
  address: {
    street: "Av. La Luz 100, Local C-06",
    neighborhood: "Pedregal del Vergel",
    city: "Monterrey",
    state: "N.L.",
    zip: "64988",
    country: "México",
    full: "Av. La Luz 100, Local C-06, Pedregal del Vergel, 64988 Monterrey, N.L., México",
    mapsUrl:
      "https://maps.google.com/?q=Av.+La+Luz+100,+Pedregal+del+Vergel,+Monterrey,+N.L.",
  },
  rating: 4.9,
  reviewCount: 97,
  averageTicket: 550,
  delivery: {
    uberEats:
      "https://www.ubereats.com/mx/store/casertano/bSDZUwIrR_Ka_yT32iSiSw",
    rappi: "https://www.rappi.com.mx/restaurantes/1930244809-casertano",
  },
};

export const hours = [
  { day: "Lunes", hours: "Cerrado", closed: true },
  { day: "Martes", hours: "2:00 PM – 9:30 PM" },
  { day: "Miércoles", hours: "2:00 PM – 9:30 PM", highlight: "2 pizzas = postre gratis" },
  { day: "Jueves", hours: "2:00 PM – 10:00 PM" },
  { day: "Viernes", hours: "2:00 PM – 11:00 PM" },
  { day: "Sábado", hours: "2:00 PM – 11:00 PM" },
  { day: "Domingo", hours: "1:30 PM – 6:30 PM" },
];

export const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Visítanos", href: "#visitanos" },
];

export const menuCategories = [
  {
    id: "classiche",
    title: "Pizze Classiche",
    subtitle: "Las recetas atemporales de Nápoles",
    items: [
      {
        name: "Marinara",
        description:
          "Salsa pomodoro, orégano, ajo rebanado, aceite extra virgen de oliva (AEVO).",
        price: 290,
      },
      {
        name: "Sempre Bella",
        description:
          "Salsa pomodoro, Parmigiano Reggiano DOP, albahaca fresca, AEVO.",
        price: 310,
        popular: true,
      },
      {
        name: "Diavola",
        description:
          "Salsa pomodoro calabrese, orégano, mozzarella, salame calabrese.",
        price: 400,
      },
      {
        name: "Capricciosa",
        description:
          "Salsa pomodoro, orégano, albahaca, mozzarella, champiñones, prosciutto cotto, aceitunas negras, alcachofas.",
        price: 400,
      },
      {
        name: "Prosciutto e Rucola",
        description:
          "Salsa pomodoro, mozzarella, prosciutto di Parma, arúgula, AEVO, Parmigiano Reggiano DOP.",
        price: 440,
      },
    ],
  },
  {
    id: "casertano",
    title: "Pizze Casertano",
    subtitle: "Creaciones de la casa con ingredientes selectos",
    items: [
      {
        name: "Napoli",
        description:
          "Salsa pomodoro, orégano, Parmigiano Reggiano DOP, ajo, anchoas, AEVO.",
        price: 400,
      },
      {
        name: "Génova",
        description:
          "Pesto genovese, gorgonzola, pomodorini, Parmigiano Reggiano DOP, albahaca fresca.",
        price: 400,
      },
      {
        name: "Mia Italia",
        description:
          "Salsa pomodoro, Parmigiano Reggiano DOP, salame piccante, pancetta affumicata, burrata, AEVO.",
        price: 445,
      },
      {
        name: "Cacciatore",
        description:
          "Salsa pomodoro, Parmigiano Reggiano DOP, salame piccante, salame calabrese, prosciutto cotto, salsiccia, AEVO.",
        price: 445,
      },
      {
        name: "Mamma Rosa",
        description:
          "Salsa cremosa mamma rosa, Parmigiano Reggiano DOP, champiñones, burrata, prosciutto cotto.",
        price: 445,
      },
      {
        name: "Paolo's",
        description:
          "Salsa pomodoro, Parmigiano Reggiano DOP, burrata, prosciutto di Parma, AEVO al tartufo nero.",
        price: 445,
        signature: true,
      },
      {
        name: "5 Formaggi Tartufata",
        description:
          "Salsa pomodoro, mozzarella, fontina, Parmigiano Reggiano DOP, provolone, gorgonzola, AEVO al tartufo bianco.",
        price: 445,
      },
      {
        name: "Che Fico!",
        description:
          "Pizza bianca con queso de cabra, higos frescos, AEVO, prosciutto di Parma, arúgula, miel, balsámico, nueces.",
        price: 445,
        popular: true,
      },
      {
        name: "Pizza Maestro",
        description:
          "Fontina, mozzarella, stracciatella, pecorino romano, hongos porcini, perejil, trufa negra.",
        price: 445,
        signature: true,
      },
    ],
  },
  {
    id: "bambini",
    title: "Pizze Bambini",
    subtitle: "Para los pequeños de la casa",
    items: [
      {
        name: "Formaggi",
        description: "Salsa pomodoro, mozzarella, cheddar blanco.",
        price: 310,
      },
      {
        name: "Pepperoni",
        description:
          "Salsa pomodoro, orégano, mozzarella, pepperoni, AEVO.",
        price: 310,
      },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    subtitle: "El final perfecto para tu experiencia",
    items: [
      {
        name: "Tiramisú Casertano",
        description:
          "Receta de la casa con mascarpone, café espresso y cacao amargo.",
        price: 180,
        popular: true,
        signature: true,
      },
      {
        name: "Tiramisú al Pistacchio",
        description:
          "Versión con pistacchio siciliano — el favorito de nuestros comensales.",
        price: 195,
        popular: true,
      },
    ],
  },
  {
    id: "bevande",
    title: "Bevande",
    subtitle: "Bebidas italianas seleccionadas",
    items: [
      {
        name: "Aperol Spritz",
        description: "El clásico aperitivo italiano.",
        price: 165,
        popular: true,
      },
      {
        name: "Agua Mineral San Pellegrino",
        description: "250 ml.",
        price: 74,
      },
      {
        name: "Limonata San Pellegrino",
        description: "Lata 330 ml.",
        price: 86,
      },
      {
        name: "Aranciata San Pellegrino",
        description: "Lata 330 ml.",
        price: 86,
      },
    ],
  },
];

export const highlights = [
  {
    title: "Masa Madre",
    description: "Más de 50 horas de fermentación lenta para una masa ligera, suave y digerible.",
    icon: "wheat",
  },
  {
    title: "Horno Napoletano",
    description: "Horno de leña importado de Italia, certificado para la auténtica pizza napoletana.",
    icon: "flame",
  },
  {
    title: "Certificación APN",
    description: "Certificados por la Associazione Pizzaiuoli Napoletani — uno de ~100 en el mundo fuera de Nápoles.",
    icon: "award",
  },
  {
    title: "Open Kitchen",
    description: "Observa el arte del pizzaiolo frente al horno. Una experiencia íntima y auténtica.",
    icon: "chef",
  },
];

export const reviews = [
  {
    name: "Didier Solo",
    text: "Es la mejor pizza que he probado en mi vida, realmente otro nivel de cocina. Un lugar hermoso con un balance entre estética y gastronomía que no he visto en otros lugares de Monterrey.",
    rating: 5,
  },
  {
    name: "Laura Vega",
    text: "Son las mejores pizzas de Monterrey. La masa es suave y los ingredientes de primera calidad. El Aperol Spritz delicioso. El lugar es muy acogedor — te sientes en casa.",
    rating: 5,
  },
  {
    name: "Jared Ward",
    text: "Amazing hidden gem in Monterrey! Pizza just like the traditional ones in modern Napoli. Great flavours and the dough is so soft and delicious.",
    rating: 5,
  },
  {
    name: "Perla Caballero",
    text: "Hemos probado 8 diferentes pizzas de su menú, todas con un sabor increíble. El tiramisú con pistache es TOP. Excelente sello de servicio y buena música italiana.",
    rating: 5,
  },
  {
    name: "Carlos Bermeo",
    text: "Definitivamente la mejor pizza que he probado en Monterrey. Calidad de los ingredientes notablemente superior y se refleja en el sabor.",
    rating: 5,
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    alt: "Pizza napoletana recién horneada",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    alt: "Pizza artesanal con ingredientes frescos",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Pizza gourmet en mesa de madera",
  },
  {
    src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    alt: "Preparación de pasta y pizza italiana",
  },
  {
    src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
    alt: "Horno de pizza napoletana",
  },
  {
    src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    alt: "Tiramisú italiano artesanal",
  },
];
