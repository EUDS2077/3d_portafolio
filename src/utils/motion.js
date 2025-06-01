// Animación para textos: se mueve desde arriba con opacidad 0 a su posición original con opacidad 1
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,         // Mueve el texto 50px hacia arriba (fuera de vista)
      opacity: 0,     // Completamente transparente
    },
    show: {
      y: 0,           // Vuelve a su posición original
      opacity: 1,     // Totalmente visible
      transition: {
        type: "spring",   // Usa una animación con efecto de resorte
        duration: 1.25,   // Duración de la animación
        delay: delay,     // Retardo antes de comenzar
      },
    },
  };
};

// Animación de entrada con dirección personalizada
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      // Posición inicial según la dirección
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,  // Comienza invisible
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,  // Se vuelve visible
      transition: {
        type: type,         // Tipo de transición (por ejemplo: spring, tween)
        delay: delay,       // Retardo antes de iniciar
        duration: duration, // Duración de la animación
        ease: "easeOut",    // Curva de aceleración
      },
    },
  };
};

// Animación de "zoom": aparece desde un tamaño 0 hasta tamaño real
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,     // Escala 0, es decir, invisible
      opacity: 0,   // También transparente
    },
    show: {
      scale: 1,     // Escala normal
      opacity: 1,   // Visible
      transition: {
        type: "tween",     // Tipo de animación lineal
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Animación de desplazamiento desde un lado específico
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      // Se mueve fuera de la pantalla dependiendo de la dirección
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" || direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Contenedor que aplica animaciones con retardo entre hijos
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {}, // No necesita ocultar nada inicialmente
    show: {
      transition: {
        staggerChildren: staggerChildren,         // Tiempo entre animaciones de los hijos
        delayChildren: delayChildren || 0,        // Retardo inicial para el primer hijo
      },
    },
  };
};