// Importación de React y la librería de animaciones
import React from "react";
import { motion } from "framer-motion";

// Importación de estilos, HOC y datos necesarios
import { styles } from "../styles"; // Estilos globales personalizados
import { SectionWrapper } from "../hoc"; // HOC para dar formato a secciones
import { fadeIn, textVariant } from "../utils/motion"; // Funciones de animación
import { testimonials } from "../constants"; // Arreglo de testimonios

// Componente de tarjeta individual para mostrar cada testimonio
const FeedbackCard = ({
  index,
  testimonial, // Texto del testimonio
  name,        // Nombre de quien lo da
  designation, // Cargo o puesto
  company,     // Empresa
  image,       // Imagen o avatar
}) => (
  // Animación de aparición con retardo progresivo según índice
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    {/* Comillas de apertura estilizadas */}
    <p className='text-white font-black text-[48px]'>"</p>

    {/* Contenido del testimonio */}
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      {/* Información del autor del testimonio */}
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company} {/* Cargo y empresa */}
          </p>
        </div>

        {/* Imagen o avatar del autor */}
        <img
          src={image}
          alt={`feedback_by-${name}`} // Texto alternativo accesible
          className='w-10 h-10 rounded-full object-cover' // Imagen circular
        />
      </div>
    </div>
  </motion.div>
);

// Componente principal que renderiza todos los testimonios
const Feedbacks = () => {
  return (
    // Contenedor con fondo y bordes redondeados
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>

      {/* Sección de encabezado del componente */}
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* Animación de texto del encabezado */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Lo que otros dicen</p>
          <h2 className={styles.sectionHeadText}>Testimonios.</h2>
        </motion.div>
      </div>

      {/* Contenedor de todas las tarjetas de feedback */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          // Renderiza cada testimonio en una tarjeta
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial} // Desestructura los datos directamente
          />
        ))}
      </div>
    </div>
  );
};

// Exporta el componente envuelto con estilos y comportamiento extra del HOC
export default SectionWrapper(Feedbacks, "");