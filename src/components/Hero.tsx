import React from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import Image from "next/image";

const texts = [
  "Fullstack Developer",
  "Software Engineer",
  "Web Developer",
  "Backend Specialist",
  "Frontend Designer",
  "Problem Solver",
  "Tech Enthusiast",
  "Creative Coder",
  "UI/UX Builder",
  "Lifelong Learner",
];

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex justify-center items-center lg:flex-row flex-col gap-y-10 gap-x-52"
    >
      <div className="flex flex-col gap-y-3">
        <h1 className=" text-2xl lg:text-4xl font-bold" data-aos="fade-right">
          Paolo G. Sibua.
        </h1>
        <div data-aos="fade-right" data-aos-delay="200">
          <TypingAnimation
            className=" text-lg lg:text-xl text-muted-foreground font-medium"
            as={"h2"}
          >
            Fullstack Developer
          </TypingAnimation>
        </div>
        <p
          className="max-w-prose text-muted-foreground"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          a passionate Fullstack Developer dedicated to building modern,
          scalable, and user-friendly applications. I enjoy turning complex
          problems into simple, elegant solutions with clean code and thoughtful
          design.
        </p>
      </div>
      <Image
        draggable="false"
        data-aos="fade"
        data-aos-delay="600"
        priority
        src="/portrait_nobg.png"
        alt="Portrait Picture"
        height={500}
        width={400}
      />
    </div>
  );
};

export default HeroSection;
