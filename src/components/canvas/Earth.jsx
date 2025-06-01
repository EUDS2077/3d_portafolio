// Importa React y el componente Suspense para carga diferida/asíncrona
import React, { Suspense } from "react";
// Importa Canvas para renderizar escenas 3D con react-three-fiber
import { Canvas } from "@react-three/fiber";
// Importa controles de cámara, precarga y carga de modelos GLTF desde drei
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Importa un componente de loader personalizado mientras se cargan modelos
import CanvasLoader from "../Loader";

// Componente que representa el planeta Tierra usando un modelo GLTF
const Earth = () => {
  // Carga el modelo 3D desde la carpeta "planet"
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // Renderiza el modelo como un objeto primitivo con escala y posición fija
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// Componente principal que renderiza el canvas 3D con la Tierra
const EarthCanvas = () => {
  return (
    <Canvas
      shadows                             // Activa las sombras
      frameloop='demand'                  // Renderiza solo cuando hay cambios (optimización)
      dpr={[1, 2]}                         // Ajusta el ratio de pixeles según el dispositivo
      gl={{ preserveDrawingBuffer: true }} // Conserva el buffer (útil para capturas)
      camera={{
        fov: 45,                          // Campo de visión de la cámara
        near: 0.1,                        // Plano cercano
        far: 200,                         // Plano lejano
        position: [-4, 3, 6],             // Posición inicial de la cámara
      }}
    >
      {/* Suspense permite cargar el modelo mientras muestra el loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Controles para rotar automáticamente, sin permitir zoom */}
        <OrbitControls
          autoRotate                      // Rotación automática
          enableZoom={false}             // No permite hacer zoom
          maxPolarAngle={Math.PI / 2}    // Ángulo máximo hacia abajo
          minPolarAngle={Math.PI / 2}    // Ángulo mínimo hacia arriba
        />

        {/* Renderiza el modelo de la Tierra */}
        <Earth />

        {/* Precarga todos los assets antes de que se usen */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Exporta el componente principal para poder usarlo en otros archivos
export default EarthCanvas;