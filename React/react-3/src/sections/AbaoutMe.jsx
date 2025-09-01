export default function AboutMe() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Fondo estrellas */}
      <div className="absolute inset-0 stars -z-10"></div>

      {/* Contenido */}
      <div className="max-w-3xl text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Sobre mí
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Soy{" "}
          <span className="font-semibold text-rose-400">
            desarrollador Full Stack
          </span>
          , apasionado por la tecnología y la creación de soluciones digitales.
          Me encanta{" "}
          <span className="font-semibold text-purple-400">
            trabajar en equipo
          </span>{" "}
          y aprender cosas nuevas constantemente.
        </p>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
          Me considero una persona{" "}
          <span className="text-rose-400">responsable</span>,
          <span className="text-purple-400"> amable</span> y siempre dispuesta a
          dar lo mejor para lograr grandes resultados junto con mi equipo.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Fullstack</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Trabajo en equipo</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Responsable</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Amable</p>
        </div>
      </div>
    </section>
  );
}
