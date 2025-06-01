// Objeto que contiene clases CSS personalizadas y reutilizables con Tailwind
const styles = {
  // Padding horizontal responsivo: mayor en pantallas medianas (sm)
  paddingX: "sm:px-16 px-6",

  // Padding vertical responsivo: mayor en pantallas medianas (sm)
  paddingY: "sm:py-16 py-6",

  // Padding completo (X e Y) responsivo
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // Texto principal del héroe (titulo grande)
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    // - Negrita extrema
    // - Color blanco
    // - Tamaño de fuente adaptado a distintos breakpoints
    // - Espaciado entre líneas (leading) grande en pantallas grandes
    // - Margen superior

  // Texto secundario del héroe (subtítulo)
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
    // - Color lila claro (#dfd9ff)
    // - Peso medio
    // - Tamaño de fuente adaptado a breakpoints
    // - Espaciado entre líneas en pantallas grandes

  // Título de sección (general)
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    // - Color blanco
    // - Muy negrita
    // - Tamaños adaptables para pantallas medianas, pequeñas y extra pequeñas

  // Subtítulo de sección (general)
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    // - Tamaño de texto más grande en pantallas sm
    // - Color secundario personalizado
    // - Texto en mayúsculas
    // - Espaciado entre letras más amplio (tracking-wider)
};

// Exporta el objeto para poder importarlo y usarlo en otros archivos
export { styles };