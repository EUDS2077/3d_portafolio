// Importación de React
import React from "react";

// Importación del componente BallCanvas (probablemente un canvas 3D para mostrar íconos dentro de una esfera)
import { BallCanvas } from "./canvas";

// HOC que envuelve la sección para aplicar estilos y/o comportamiento común
import { SectionWrapper } from "../hoc";

// Lista de tecnologías a mostrar (cada una con nombre e ícono)
import { technologies } from "../constants";

// Componente Tech que muestra tecnologías en esferas animadas
const Tech = () => {
  return (
    // Contenedor principal: usa flexbox, permite múltiples filas y espacio entre elementos
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* Mapeo de cada tecnología para renderizar una esfera con su icono */}
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* Renderiza una esfera 3D con el ícono de la tecnología */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// Exporta el componente envuelto con el HOC SectionWrapper para aplicar estilos globales o animaciones
export default SectionWrapper(Tech, "");