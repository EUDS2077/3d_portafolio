// Importación de librerías y módulos necesarios
import React from "react"; // React para crear componentes
import Tilt from "react-tilt"; // Efecto de inclinación 3D al pasar el mouse
import { motion } from "framer-motion"; // Animaciones declarativas

// Importaciones de archivos internos
import { styles } from "../styles"; // Estilos personalizados centralizados
import { services } from "../constants"; // Lista de servicios a mostrar
import { SectionWrapper } from "../hoc"; // HOC que añade estilos/comportamientos comunes a secciones
import { fadeIn, textVariant } from "../utils/motion"; // Funciones de animación reutilizables

// Componente para renderizar una tarjeta de servicio con animación y efecto Tilt
const ServiceCard = ({ index, title, icon }) => (
  // Tilt aplica el efecto 3D al pasar el mouse
  <Tilt className='xs:w-[250px] w-full'>
    {/* motion.div permite aplicar animación usando Framer Motion */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Animación personalizada con retardo por índice
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' // Estilos del borde con degradado
    >
      {/* Contenedor interno con opciones de efecto Tilt */}
      <div
        options={{
          max: 45, // Máximo ángulo de inclinación
          scale: 1, // Escala normal (sin zoom)
          speed: 450, // Velocidad del efecto
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* Icono representativo del servicio */}
        <img
          src={icon}
          alt='web-development' // Texto alternativo por accesibilidad
          className='w-16 h-16 object-contain'
        />

        {/* Título del servicio */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// Componente principal "About" que contiene la sección descriptiva
const About = () => {
  return (
    <>
      {/* Texto inicial con animación */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general.</h2>
      </motion.div>

      {/* Párrafo con animación de fade-in */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)} // Sin dirección ni tipo, retardo de 0.1s y duración de 1s
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Soy un desarrollador de software experto con experiencia en TypeScript y JavaScript, y
        con experiencia en frameworks como React, Node.js y Three.js. Aprendo rápido y colaboro
        estrechamente con clientes para crear soluciones eficientes, escalables e intuitivas que
        resuelven problemas reales. ¡Trabajemos juntos para hacer realidad tus ideas!
      </motion.p>

      {/* Renderizado dinámico de las tarjetas de servicios con animación */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          // Por cada servicio, se crea una tarjeta con su título, icono y animación personalizada
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Exportación del componente envuelto con un HOC que le da comportamiento adicional (como ID y padding)
export default SectionWrapper(About, "about");