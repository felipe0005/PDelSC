export default function AboutMe() {
  return (
    <section id="about" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Fondo estrellas */}
      <div className="absolute inset-0 stars -z-10"></div>

      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.6)] z-[-10] border-2 border-blue-400">
        <div className="w-full h-full bg-[url('./img/earth.png')] bg-cover bg-[length:300%_100%] animate-earth"></div>
      </div>

      <div className="max-w-3xl text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          i'am{" "}
          <span className="font-semibold text-rose-400">
            Full stack developer
          </span>
          , passionate about technology and creating digital solutions I love{" "}
          <span className="font-semibold text-purple-400">
            working as a team
          </span>{" "}
          and constantly learn new things.
        </p>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
          I consider myself a{" "}
          <span className="text-rose-400"> responsible</span>,
          <span className="text-purple-400"> kind </span> person and always
          willing to do my best to achieve great results together with my team.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Fullstack</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Team working</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Responsible</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-white font-semibold">Kind</p>
        </div>
      </div>
    </section>
  );
}
