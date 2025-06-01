// Importación de librerías
import React from "react";
import Tilt from "react-tilt"; // Efecto 3D al pasar el mouse
import { motion } from "framer-motion"; // Animaciones con Framer Motion

// Importaciones internas del proyecto
import { styles } from "../styles";             // Estilos centralizados
import { github } from "../assets";             // Ícono de GitHub
import { SectionWrapper } from "../hoc";        // HOC para aplicar estilos comunes a secciones
import { projects } from "../constants";        // Lista de proyectos
import { fadeIn, textVariant } from "../utils/motion"; // Funciones para animaciones personalizadas

// Componente que muestra una tarjeta por cada proyecto
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // Animación de entrada desde abajo
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Efecto Tilt 3D al pasar el cursor */}
      <Tilt
        options={{
          max: 45,     // Máxima inclinación
          scale: 1,    // Escala constante
          speed: 450,  // Velocidad del efecto
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        {/* Imagen del proyecto */}
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* Botón flotante para ir al código fuente */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Abre GitHub en nueva pestaña
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        {/* Título y descripción del proyecto */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* Lista de etiquetas tecnológicas */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Clave única
              className={`text-[14px] ${tag.color}`} // Aplica color dinámico
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Componente principal que lista todos los proyectos
const Works = () => {
  return (
    <>
      {/* Encabezado con animación */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mi trabajo</p>
        <h2 className={`${styles.sectionHeadText}`}>Proyectos.</h2>
      </motion.div>

      {/* Descripción general de los proyectos */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} // Animación de aparición
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Los siguientes proyectos muestran mis habilidades y experiencia mediante ejemplos
          prácticos de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios
          de código y demostraciones en vivo. Esto refleja mi capacidad para resolver problemas
          complejos, trabajar con diferentes tecnologías y gestionar proyectos eficazmente.
        </motion.p>
      </div>

      {/* Renderiza cada tarjeta de proyecto */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Exporta el componente envuelto con un HOC que le da estilos y comportamiento adicional
export default SectionWrapper(Works, "");