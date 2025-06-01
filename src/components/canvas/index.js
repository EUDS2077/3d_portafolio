// Importa el componente de lienzo 3D que muestra el planeta Tierra
import EarthCanvas from "./Earth";

// Importa el componente que renderiza una esfera con una imagen como textura
import BallCanvas from "./Ball";

// Importa el componente que muestra una computadora 3D
import ComputersCanvas from "./Computers";

// Importa el componente que renderiza un fondo de estrellas
import StarsCanvas from "./Stars";

// Exporta todos los componentes importados en un solo objeto
// Esto permite hacer importaciones más limpias en otros archivos como:
// import { EarthCanvas, BallCanvas } from "../components/canvas";
export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas };