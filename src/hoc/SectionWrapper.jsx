// Importa el componente motion de framer-motion para animaciones
import { motion } from "framer-motion";

// Importa estilos globales personalizados (como padding)
import { styles } from "../styles";

// Importa la animación preconfigurada para secciones (animación de entrada escalonada)
import { staggerContainer } from "../utils/motion";

// Higher-Order Component (HOC): envuelve cualquier componente con animación y estilos de sección
const StarWrapper = (Component, idName) =>
  // Función que retorna un nuevo componente React
  function HOC() {
    return (
      // Sección animada usando framer-motion
      <motion.section
        variants={staggerContainer()}     // Animación escalonada para los elementos hijos
        initial='hidden'                  // Estado inicial oculto
        whileInView='show'                // Se muestra al entrar en el viewport
        viewport={{ once: true, amount: 0.25 }} // Solo una vez, cuando se ha mostrado el 25% de la sección
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Estilos: padding, ancho, centrado, z-index
      >
        {/* Ancla invisible para navegación por secciones con scroll suave */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* Renderiza el componente que se pasó como argumento envuelto */}
        <Component />
      </motion.section>
    );
  };

// Exporta el HOC para que pueda envolver cualquier sección (como About, Contact, etc.)
export default StarWrapper;