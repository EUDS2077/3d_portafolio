// Importación de React y componentes necesarios
import React from "react";

// Componentes de línea de tiempo vertical
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// Librería de animaciones
import { motion } from "framer-motion";

// Estilos CSS de la librería react-vertical-timeline
import "react-vertical-timeline-component/style.min.css";

// Importaciones internas
import { styles } from "../styles"; // Estilos globales personalizados
import { experiences } from "../constants"; // Array de experiencias laborales
import { SectionWrapper } from "../hoc"; // HOC que envuelve la sección con diseño y lógica común
import { textVariant } from "../utils/motion"; // Animación para encabezados

// Componente para renderizar cada tarjeta de experiencia
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836", // Fondo de la tarjeta
        color: "#fff", // Color del texto
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }} // Flecha decorativa del timeline
      date={experience.date} // Fecha de la experiencia
      iconStyle={{ background: experience.iconBg }} // Color de fondo del icono
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* Icono de la empresa */}
          <img
            src={experience.icon} // Imagen (logo de la empresa)
            alt={experience.company_name} // Texto alternativo accesible
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      {/* Título del puesto */}
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {/* Nombre de la empresa */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Lista de tareas o logros */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`} // Clave única para cada punto
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point} {/* Descripción de la actividad */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Componente principal que contiene toda la sección de experiencia
const Experience = () => {
  return (
    <>
      {/* Encabezado con animación */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Lo que he hecho hasta ahora
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiencia laboral.
        </h2>
      </motion.div>

      {/* Contenedor de la línea de tiempo */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {/* Itera sobre todas las experiencias y crea una tarjeta para cada una */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`} // Clave única
              experience={experience} // Pasa los datos como props
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Exportación del componente envuelto con estilo y comportamiento adicional
export default SectionWrapper(Experience, "work");