import AboutMeSection from "@/components/AboutMeSection";
import ContactMeSection from "@/components/ContactMeSection";
import HeroSection from "@/components/Hero";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillsSection from "@/components/Skills/SkillsSection";

export default function Home() {
  return (
    <div className="mt-32 flex flex-col gap-y-[300px] m-3">
      <section id="hero" className=" scroll-mt-32">
        <HeroSection />
      </section>
      <section id="projects" className=" scroll-mt-32">
        <ProjectSection />
      </section>
      <section id="about-me" className=" scroll-mt-32">
        <AboutMeSection />
      </section>
      <section id="skills" className=" scroll-mt-32">
        <SkillsSection />
      </section>
      <section id="contact-me" className=" scroll-mt-32">
        <ContactMeSection />
      </section>
    </div>
  );
}
