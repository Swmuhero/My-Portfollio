import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { AboutMe } from "@/components/sections/AboutMe";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CinematicReveal />
        <AboutMe />
        <SystemsNominal />
        <Projects />
        <Contact />
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
