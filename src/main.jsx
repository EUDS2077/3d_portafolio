// Importa React, necesario para trabajar con componentes
import React from "react";

// Importa ReactDOM para renderizar la app en el DOM del navegador
import ReactDOM from "react-dom/client";

// Importa el componente principal de la aplicación
import App from "./App";

// Importa los estilos globales de la aplicación
import "./index.css";

// Monta la aplicación React en el elemento con id="root" del HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode ayuda a detectar errores y advertencias en desarrollo
  <React.StrictMode>
    <App /> {/* Renderiza el componente App (la app completa) */}
  </React.StrictMode>
);