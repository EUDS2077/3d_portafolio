// Importa React y hooks necesarios: Suspense para carga diferida, useEffect y useState para lógica reactiva
import React, { Suspense, useEffect, useState } from "react";
// Importa el componente Canvas para renderizar escenas 3D con react-three-fiber
import { Canvas } from "@react-three/fiber";
// Importa herramientas útiles de drei para escenas 3D
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Importa un componente personalizado para mostrar mientras se cargan los modelos
import CanvasLoader from "../Loader";

// Componente que representa la computadora 3D
const Computers = ({ isMobile }) => {
  // Carga el modelo 3D desde la ruta especificada
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Luz hemisférica con poca intensidad para dar iluminación general */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      
      {/* Luz tipo spot que proyecta sombras y mejora el realismo */}
      <spotLight
        position={[-20, 50, 10]} // Posición de la luz
        angle={0.12}             // Ángulo de dispersión
        penumbra={1}             // Difuminado del borde
        intensity={1}            // Intensidad de la luz
        castShadow               // Permite que la luz proyecte sombras
        shadow-mapSize={1024}    // Resolución del mapa de sombras
      />
      
      {/* Luz puntual adicional para iluminar directamente */}
      <pointLight intensity={1} />

      {/* Renderiza el modelo importado como un objeto primitivo */}
      <primitive
        object={computer.scene}                           // Modelo 3D importado
        scale={isMobile ? 0.7 : 0.75}                      // Escala diferente según si es móvil
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Posición distinta según el dispositivo
        rotation={[-0.01, -0.2, -0.1]}                     // Rotación inicial del modelo
      />
    </mesh>
  );
};

// Componente que contiene el lienzo 3D y lógica de detección de dispositivo
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); // Estado para saber si es dispositivo móvil

  useEffect(() => {
    // Crea una media query para detectar pantallas pequeñas (menos de 500px)
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Establece el estado inicial según si cumple con la media query
    setIsMobile(mediaQuery.matches);

    // Define la función que actualiza el estado al cambiar el tamaño de pantalla
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Agrega el listener para actualizar en tiempo real si cambia el ancho de pantalla
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Limpia el listener al desmontar el componente
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <Canvas
      frameloop='demand' // Renderiza solo cuando es necesario (mejora rendimiento)
      shadows             // Activa las sombras
      dpr={[1, 2]}        // Resolución adaptativa
      camera={{ position: [20, 3, 5], fov: 25 }} // Posición y ángulo de visión de la cámara
      gl={{ preserveDrawingBuffer: true }} // Conserva el buffer para permitir capturas o efectos posteriores
    >
      {/* Suspense espera a que se cargue el modelo y muestra un loader mientras tanto */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Controles de cámara (sin zoom) y restringido a rotar solo en eje horizontal */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Renderiza la computadora 3D con la información si es móvil */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Precarga todos los recursos antes de usarlos */}
      <Preload all />
    </Canvas>
  );
};

// Exporta el componente principal para usarlo en otros archivos
export default ComputersCanvas;