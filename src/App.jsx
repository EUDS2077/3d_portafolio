// Importa el enrutador de React para manejar navegación entre rutas
import { BrowserRouter } from "react-router-dom";

// Importa todos los componentes visuales de la aplicación
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// Componente principal de la app
const App = () => {
  return (
    // Envuelve la aplicación en BrowserRouter para permitir el uso de rutas
    <BrowserRouter>
      {/* Contenedor general con posición relativa y un fondo primario */}
      <div className='relative z-0 bg-primary'>
        
        {/* Sección superior con fondo personalizado (imagen) */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar /> {/* Barra de navegación */}
          <Hero />   {/* Sección principal del héroe (portada) */}
        </div>

        {/* Secciones del sitio, cada una es un componente */}
        <About />      {/* Sección sobre mí */}
        <Experience /> {/* Línea de tiempo o experiencia laboral */}
        <Tech />       {/* Tecnologías utilizadas */}
        <Works />      {/* Proyectos realizados */}
        <Feedbacks />  {/* Reseñas o comentarios de otras personas */}

        {/* Sección final con contacto y un canvas de estrellas */}
        <div className='relative z-0'>
          <Contact />      {/* Formulario o datos de contacto */}
          <StarsCanvas />  {/* Animación de fondo con estrellas */}
        </div>
      </div>
    </BrowserRouter>
  );
}

// Exporta el componente App para ser usado en otros archivos
export default App;