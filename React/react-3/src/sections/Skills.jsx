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
    {
      icon: <FaHtml5 className="text-orange-500" />,
      name: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3Alt className="text-blue-500" />,
      name: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <FaReact className="text-cyan-400" />,
      name: "React",
      link: "https://react.dev/",
    },
    {
      icon: <FaNodeJs className="text-green-500" />,
      name: "Node.js",
      link: "https://nodejs.org/en/docs",
    },
    {
      icon: <FaPhp className="text-indigo-400" />,
      name: "PHP",
      link: "https://www.php.net/docs.php",
    },
    {
      icon: <FaPython className="text-yellow-400" />,
      name: "Python",
      link: "https://docs.python.org/3/",
    },
    {
      icon: <SiAstro className="text-purple-400" />,
      name: "Astro",
      link: "https://docs.astro.build/",
    },
    {
      icon: <SiTailwindcss className="text-sky-400" />,
      name: "Tailwind",
      link: "https://tailwindcss.com/docs",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 stars -z-10"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-6xl text-white">
        {skills.map((skill, index) => (
          <a
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-2 text-lg">{skill.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
