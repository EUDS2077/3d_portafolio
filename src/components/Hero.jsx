// Importación del componente de animación
import { motion } from "framer-motion";

// Estilos globales y componente 3D
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Componente principal de la sección "Hero"
const Hero = () => {
  return (
    // Sección de pantalla completa (100vh)
    <section className={`relative w-full h-screen mx-auto`}>
      
      {/* Contenedor absoluto centrado con contenido textual */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Columna decorativa: círculo y línea vertical */}
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Círculo de color */}
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          {/* Línea vertical con degradado */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Contenido de texto de bienvenida */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola yo soy <span className='text-[#915EFF]'>Edwin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desarrollo visuales 3D <br className='sm:block hidden' />
            y aplicaciones web.
          </p>
        </div>
      </div>

      {/* Renderiza animación/canvas 3D de computadoras */}
      <ComputersCanvas />

      {/* Indicador animado de scroll hacia abajo */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* Puntos animados hacia arriba y abajo */}
            <motion.div
              animate={{
                y: [0, 24, 0], // Movimiento en eje Y
              }}
              transition={{
                duration: 1.5,     // Duración del ciclo
                repeat: Infinity,  // Repite para siempre
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Exportación del componente Hero para ser usado en otras partes
export default Hero;