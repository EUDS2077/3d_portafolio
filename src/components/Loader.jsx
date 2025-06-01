// Importa el componente Html y el hook useProgress desde la librería drei (extensión de React Three Fiber)
import { Html, useProgress } from "@react-three/drei";

// Componente funcional que muestra una pantalla de carga mientras se renderiza el contenido 3D
const CanvasLoader = () => {
  // useProgress devuelve el porcentaje de carga actual (entre 0 y 100)
  const { progress } = useProgress();

  return (
    // Html permite renderizar contenido HTML dentro del canvas 3D (como overlay)
    <Html
      as='div'     // Se renderiza como un <div>
      center       // Centra automáticamente el contenido en el canvas
      style={{     // Estilo del contenedor principal (centrado y en columna)
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Span con clase personalizada que probablemente tenga una animación de carga (ver en CSS) */}
      <span className='canvas-loader'></span>

      {/* Porcentaje numérico mostrado debajo de la animación */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* Muestra el progreso con dos decimales */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Exporta el componente para ser usado donde se renderice un canvas 3D (como <ComputersCanvas />)
export default CanvasLoader;