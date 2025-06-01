import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajar",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador web",
    icon: web,
  },
  {
    title: "Desarrollador nativo de react",
    icon: mobile,
  },
  {
    title: "Desarrollador backend",
    icon: backend,
  },
  {
    title: "Creador de contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desarrollador React",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Marzo de 2020 - abril de 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Desarrollador nativo de react",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Enero de 2021 - Febrero de 2022",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Desarrollador web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Enero de 2022 - Enero de 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Enero de 2023 - Presente",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pensé que era imposible hacer un sitio web tan hermoso como nuestro producto, pero Rick me demostró que estaba equivocado.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca he conocido a un desarrollador web que realmente se preocupe por el éxito de sus clientes como el  lo hace.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Después de que optimizó nuestro sitio web, nuestro tráfico aumentó un 50%. ¡Le agradecemos muchísimo!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Alquiler de coches",
    description:
      "Plataforma basada en web que permite a los usuarios buscar, reservar y administrar alquileres de automóviles de varios proveedores, proporcionando una solución conveniente y eficiente para las necesidades de transporte.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trabajo de ti",
    description:
      "Aplicación web que permite a los usuarios buscar ofertas de empleo, ver rangos salariales estimados para los puestos y localizar trabajos disponibles según su ubicación actual.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guía de viaje",
    description:
      "Una plataforma integral de reserva de viajes que permite a los usuarios reservar vuelos, hoteles y coches de alquiler, y ofrece recomendaciones seleccionadas para destinos populares.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
