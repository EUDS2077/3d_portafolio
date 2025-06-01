// Importación de imágenes/icónos desde la carpeta assets
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

// =================== MENÚ DE NAVEGACIÓN ===================
export const navLinks = [
  {
    id: "about",   // Ancla para sección "Acerca de"
    title: "Acerca de",
  },
  {
    id: "work",    // Ancla para sección "Trabajar"
    title: "Trabajar",
  },
  {
    id: "contact", // Ancla para sección "Contacto"
    title: "Contacto",
  },
];

// =================== SERVICIOS ===================
// Tarjetas que se muestran en la sección "About"
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

// =================== TECNOLOGÍAS ===================
// Tecnologías para sección "Tech" (íconos animados)
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

// =================== EXPERIENCIAS ===================
// Línea de tiempo con trabajos anteriores (sección "Experience")
const experiences = [
  {
    title: "Desarrollador React",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Marzo de 2020 - abril de 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaboración con equipos multifuncionales.",
      "Diseño responsivo y compatibilidad entre navegadores.",
      "Revisiones de código y retroalimentación.",
    ],
  },
  {
    title: "Desarrollador nativo de react",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Enero de 2021 - Febrero de 2022",
    points: [
      "Desarrollo de aplicaciones móviles nativas.",
      "Trabajo colaborativo con el equipo de diseño y desarrollo.",
      "Optimización del rendimiento en dispositivos móviles.",
      "Revisión de código y mejoras iterativas.",
    ],
  },
  {
    title: "Desarrollador web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Enero de 2022 - Enero de 2023",
    points: [
      "Desarrollo de interfaces web para ecommerce.",
      "Colaboración en diseño UI/UX.",
      "Optimización para dispositivos móviles.",
      "Entrega continua y mejoras semanales.",
    ],
  },
  {
    title: "Desarrollador full stack",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Enero de 2023 - Presente",
    points: [
      "Desarrollo fullstack con React y Node.",
      "Integración con bases de datos y APIs.",
      "Arquitectura escalable y mantenimiento continuo.",
      "Participación activa en la planificación de productos.",
    ],
  },
];

// =================== TESTIMONIOS ===================
// Opiniones de clientes o compañeros de trabajo
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
      "Nunca he conocido a un desarrollador web que realmente se preocupe por el éxito de sus clientes como él lo hace.",
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

// =================== PROYECTOS ===================
// Proyectos destacados para mostrar en la sección "Works"
const projects = [
  {
    name: "Alquiler de coches",
    description:
      "Plataforma para buscar, reservar y gestionar alquileres de autos con múltiples proveedores.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trabajo de ti",
    description:
      "Web app para buscar empleos, ver sueldos estimados y filtrar por ubicación.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guía de viaje",
    description:
      "App para reservar vuelos, hoteles y autos, con recomendaciones de destinos populares.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

// =================== EXPORTACIÓN ===================
// Exporta los arreglos para ser usados en componentes como About, Tech, Experience, etc.
export { services, technologies, experiences, testimonials, projects };