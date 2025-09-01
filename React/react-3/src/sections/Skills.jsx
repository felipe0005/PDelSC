"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
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
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(skillsRef.current, {
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <FaPhp className="text-indigo-400" />, name: "PHP" },
    { icon: <FaPython className="text-yellow-400" />, name: "Python" },
    { icon: <SiAstro className="text-purple-400" />, name: "Astro" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6"
    >
      {/* Fondo estrellas */}
      <div className="absolute inset-0 stars -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-6xl text-white">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="flex flex-col items-center"
          >
            {skill.icon}
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
