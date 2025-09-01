export default function Projects() {
  const proyectos = [
    {
      titulo: "Calculadora",
      descripcion:
        "Aplicación web para realizar operaciones matemáticas básicas.",
      link: "https://github.com/felipe0005/PDelSC/tree/main/JavaScript/JS6",
      img: "https://placehold.co/600x400",
    },
    {
      titulo: "Ahorcado",
      descripcion: "Juego interactivo con conexión a base de datos MySQL.",
      link: "https://github.com/felipe0005/PDelSC/tree/main/Proyectos/ahorcado",
      img: "https://placehold.co/600x400",
    },
    {
      titulo: "Portfolio",
      descripcion: "Mi portfolio personal desarrollado con React y Tailwind.",
      link: "https://github.com/felipe0005/PDelSC/tree/main/React/react-3",
      img: "https://placehold.co/600x400",
    },
  ];

  return (
    <section id="projects" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Fondo estrellas */}
      <div className="absolute inset-0 stars -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Mis Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-80"
          >
            <img
              src={proyecto.img}
              alt={proyecto.titulo}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-300 mt-2">{proyecto.descripcion}</p>
              <a
                href={proyecto.link}
                target="_blank"
                className="text-pink-400 hover:text-pink-300 font-medium mt-4 inline-block"
              >
                Ver proyecto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
