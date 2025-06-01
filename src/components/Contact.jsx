// Importaciones necesarias
import React, { useRef, useState } from "react"; // Hooks de React
import { motion } from "framer-motion"; // Para animaciones
import emailjs from "@emailjs/browser"; // Librería para enviar correos desde el frontend

// Importaciones locales
import { styles } from "../styles"; // Estilos centralizados
import { EarthCanvas } from "./canvas"; // Componente que renderiza la animación 3D del planeta
import { SectionWrapper } from "../hoc"; // HOC que envuelve secciones con diseño uniforme
import { slideIn } from "../utils/motion"; // Función de animación para efecto de deslizamiento

// Componente principal de contacto
const Contact = () => {
  // Referencia al formulario para EmailJS
  const formRef = useRef();

  // Estado del formulario (nombre, correo, mensaje)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para indicar si se está enviando el mensaje
  const [loading, setLoading] = useState(false);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,        // Conserva los demás valores
      [name]: value,  // Actualiza el campo que cambió
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del form
    setLoading(true);   // Activa indicador de carga

    // Envío del formulario usando EmailJS con variables de entorno
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,   // ID del servicio de EmailJS
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,  // ID de plantilla
        {
          from_name: form.name,           // Nombre del remitente
          to_name: "JavaScript Mastery",  // Nombre del destinatario
          from_email: form.email,         // Email del remitente
          to_email: "sujata@jsmastery.pro", // Email destino
          message: form.message,          // Contenido del mensaje
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Clave pública de la API
      )
      .then(
        () => {
          // Éxito: se desactiva la carga y se muestra mensaje
          setLoading(false);
          alert("Gracias. Me pondré en contacto contigo lo antes posible.");

          // Limpia el formulario
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          // Error: se desactiva la carga y se muestra mensaje de error
          setLoading(false);
          console.error(error);
          alert("Ocurrió un error. Por favor, intenta de nuevo.");
        }
      );
  };

  return (
    // Contenedor principal con disposición responsiva
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      
      {/* Columna izquierda: Formulario */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Animación al aparecer desde la izquierda
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Ponte en contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        {/* Formulario de contacto */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Campo de nombre */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cual es tu buen nombre?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Campo de email */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu correo electrónico</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cual es tu dirección web?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Campo de mensaje */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu mensaje</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='¿Que quieres decir?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Botón de enviar */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"} {/* Cambia el texto si está cargando */}
          </button>
        </form>
      </motion.div>

      {/* Columna derecha: Animación 3D del planeta */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Animación desde la derecha
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas /> {/* Componente con animación de la Tierra */}
      </motion.div>
    </div>
  );
};

// Exporta el componente envuelto con estilos y configuración adicional
export default SectionWrapper(Contact, "contact");