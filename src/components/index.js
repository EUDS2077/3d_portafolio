// Importación de componentes canvas (escenas 3D o animaciones visuales)
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';

// Importación de los componentes principales del sitio web
import Hero from "./Hero";             // Sección principal de bienvenida
import Navbar from "./Navbar";         // Barra de navegación superior
import About from "./About";           // Sección de presentación personal o introducción
import Tech from "./Tech";             // Tecnologías o habilidades técnicas
import Experience from "./Experience"; // Línea de tiempo de experiencia laboral
import Works from "./Works";           // Proyectos o portafolio
import Feedbacks from "./Feedbacks";   // Testimonios o comentarios de clientes/usuarios
import Contact from "./Contact";       // Formulario de contacto
import CanvasLoader from "./Loader";   // Indicador de carga con animación canvas

// Exportación de todos los componentes para ser usados fácilmente en App.jsx u otros módulos
export {
  Hero,            // Sección de héroe
  Navbar,          // Barra de navegación
  About,           // Sección de "Sobre mí"
  Tech,            // Habilidades técnicas
  Experience,      // Experiencia profesional
  Works,           // Proyectos realizados
  Feedbacks,       // Opiniones de terceros
  Contact,         // Formulario de contacto
  CanvasLoader,    // Cargador visual animado
  EarthCanvas,     // Canvas 3D de la Tierra
  BallCanvas,      // Canvas animado de logos en esfera
  ComputersCanvas, // Canvas 3D de computadora
  StarsCanvas      // Fondo animado de estrellas
};