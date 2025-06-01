// Importa hooks de React y funcionalidades de react-three-fiber y drei
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// Importa función para generar posiciones aleatorias dentro de una esfera
import * as random from "maath/random/dist/maath-random.esm";

// Componente que renderiza las estrellas en 3D como puntos flotantes
const Stars = (props) => {
  const ref = useRef(); // Referencia para acceder y rotar el grupo de puntos

  // Genera 5000 puntos distribuidos aleatoriamente dentro de una esfera de radio 1.2
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Animación que rota lentamente el grupo de estrellas en cada frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // Rota en el eje X
    ref.current.rotation.y -= delta / 15; // Rota en el eje Y
  });

  return (
    // Grupo que contiene los puntos, con una rotación inicial en Z
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}                 // Referencia al objeto para rotación
        positions={sphere}        // Coordenadas de los puntos
        stride={3}                // Cada punto tiene 3 valores (x, y, z)
        frustumCulled             // Mejora el rendimiento ocultando puntos fuera de vista
        {...props}
      >
        {/* Material para los puntos (estrellas) */}
        <PointMaterial
          transparent              // Hace que el material sea transparente
          color='#f272c8'          // Color rosa claro
          size={0.002}             // Tamaño pequeño de los puntos
          sizeAttenuation={true}   // Tamaño se reduce con la distancia
          depthWrite={false}       // Evita que interfiera con otros objetos
        />
      </Points>
    </group>
  );
};

// Componente que renderiza el Canvas 3D con las estrellas como fondo
const StarsCanvas = () => {
  return (
    // Div que ocupa toda la pantalla y se posiciona detrás del contenido principal
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Suspense permite carga asíncrona sin mostrar nada como fallback */}
        <Suspense fallback={null}>
          <Stars /> {/* Renderiza las estrellas animadas */}
        </Suspense>

        {/* Precarga todos los assets antes de mostrar la escena */}
        <Preload all />
      </Canvas>
    </div>
  );
};

// Exporta el componente para usarlo en otras partes de la aplicación
export default StarsCanvas;