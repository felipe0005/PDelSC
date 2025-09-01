//importamos la secciones, img y components para usarlos
import Hero from "../sections/Hero";
import AboutMe from "../sections/AbaoutMe";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
