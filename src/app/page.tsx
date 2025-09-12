import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/Hero";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="mt-32 flex flex-col gap-y-62 m-3">
      <HeroSection />
      <section id="#projects" className="scroll-mt-[50vh]">
        <Projects />
      </section>
    </div>
  );
}
