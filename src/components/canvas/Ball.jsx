// Importa React y el componente Suspense para manejo de carga asíncrona
import React, { Suspense } from "react";
// Importa el componente Canvas para renderizar escenas 3D
import { Canvas } from "@react-three/fiber";
// Importa utilidades 3D de la librería drei
import {
  Decal,              // Para aplicar texturas tipo calcomanía
  Float,              // Para animar objetos flotando
  OrbitControls,      // Permite rotar la cámara con el mouse
  Preload,            // Precarga todos los assets
  useTexture,         // Hook para cargar texturas
} from "@react-three/drei";

// Importa un componente personalizado para mostrar un loader mientras se carga
import CanvasLoader from "../Loader";

// Componente que renderiza una esfera 3D con una calcomanía (imagen)
// props.imgUrl se usa para aplicar una textura en la esfera
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // Carga la imagen como textura

  return (
    // Envuelve el mesh con animación de flotación
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Luz ambiental tenue */}
      <ambientLight intensity={0.25} />
      {/* Luz direccional suave desde el frente */}
      <directionalLight position={[0, 0, 0.05]} />
      
      {/* Geometría 3D tipo icosaedro con sombra y escala aumentada */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        
        {/* Material de superficie blanca y plana con desplazamiento de polígonos */}
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Aplica la imagen cargada como una calcomanía sobre la geometría */}
        <Decal
          position={[0, 0, 1]}                         // Posición frontal
          rotation={[2 * Math.PI, 0, 6.25]}            // Rotación específica
          scale={1}
          map={decal}                                  // Textura aplicada
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Componente que renderiza el lienzo 3D y coloca la esfera (Ball) en él
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'                      // Renderiza solo cuando hay cambios
      dpr={[1, 2]}                             // Resolución adaptativa para pantallas
      gl={{ preserveDrawingBuffer: true }}    // Mantiene el contenido del buffer
    >
      {/* Suspense muestra un loader mientras se carga el modelo/textura */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Controles de cámara sin zoom activado */}
        <OrbitControls enableZoom={false} />
        {/* Renderiza la esfera con la imagen pasada como prop */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Precarga todos los assets para mejor rendimiento */}
      <Preload all />
    </Canvas>
  );
};

// Exporta el componente principal para usarlo en otros archivos
export default BallCanvas;