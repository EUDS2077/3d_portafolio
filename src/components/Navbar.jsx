// Importaciones necesarias
import React, { useEffect, useState } from "react"; // React y hooks
import { Link } from "react-router-dom"; // Para navegación sin recargar la página

// Importación de estilos, constantes y recursos (imágenes)
import { styles } from "../styles";
import { navLinks } from "../constants"; // Enlaces de navegación
import { logo, menu, close } from "../assets"; // Imágenes del logo y del icono de menú

// Componente Navbar
const Navbar = () => {
  // Estado para controlar qué enlace está activo
  const [active, setActive] = useState("");

  // Estado para mostrar/ocultar el menú móvil
  const [toggle, setToggle] = useState(false);

  // Estado para cambiar el color del navbar al hacer scroll
  const [scrolled, setScrolled] = useState(false);

  // useEffect para detectar scroll en la ventana
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true); // Si bajó más de 100px, activa fondo del navbar
      } else {
        setScrolled(false); // Si sube arriba de 100px, vuelve transparente
      }
    };

    window.addEventListener("scroll", handleScroll); // Agrega el listener

    return () => window.removeEventListener("scroll", handleScroll); // Limpieza
  }, []);

  return (
    // Barra de navegación fija en la parte superior
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        
        {/* Logo con texto y funcionalidad para ir al home */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // Desactiva el enlace actual
            window.scrollTo(0, 0); // Hace scroll al tope
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Actividad &nbsp;
            <span className='sm:block hidden'> Final</span>
          </p>
        </Link>

        {/* Menú para pantallas grandes */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Icono de menú o cerrar */}
          <img
            src={toggle ? close : menu} // Muestra el ícono según el estado
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} // Alterna el estado
          />

          {/* Menú desplegable móvil */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);     // Cierra el menú móvil
                    setActive(nav.title);   // Marca el enlace activo
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Exporta el componente para usarlo en el layout principal
export default Navbar;