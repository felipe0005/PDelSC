import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiAstro } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6"
    >
      {/* Fondo estrellas */}
      <div className="absolute inset-0 stars -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-6xl text-white">
        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaHtml5 className="text-orange-500" />
          <p className="mt-2 text-lg">HTML</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaCss3Alt className="text-blue-500" />
          <p className="mt-2 text-lg">CSS</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaReact className="text-cyan-400 animate-spin-slow" />
          <p className="mt-2 text-lg">React</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaNodeJs className="text-green-500" />
          <p className="mt-2 text-lg">Node.js</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaPhp className="text-indigo-400" />
          <p className="mt-2 text-lg">PHP</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <FaPython className="text-yellow-400" />
          <p className="mt-2 text-lg">Python</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <SiAstro className="text-purple-400" />
          <p className="mt-2 text-lg">Astro</p>
        </div>

        <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
          <SiTailwindcss className="text-sky-400" />
          <p className="mt-2 text-lg">Tailwind</p>
        </div>
      </div>
    </section>
  );
}
