import React from "react";
import { TypingAnimation } from "./magicui/typing-animation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col gap-y-10 gap-x-52">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-2xl" data-aos="fade-right" data-aos-delay="500">
          Hello 👋, I'm
        </h1>
        <h1
          className=" text-2xl lg:text-4xl font-bold"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          Paolo Sibua.
        </h1>
        <div data-aos="fade-right" data-aos-delay="1100">
          <TypingAnimation
            className=" text-lg lg:text-xl text-muted-foreground font-medium"
            as={"h2"}
          >
            Full Stack Developer
          </TypingAnimation>
        </div>
        <p
          className="max-w-prose text-muted-foreground text-justify text-lg"
          data-aos="fade-right"
          data-aos-delay="1400"
        >
          a passionate Fullstack Developer dedicated to building modern,
          scalable, and user-friendly applications. I enjoy turning complex
          problems into simple, elegant solutions with clean code and thoughtful
          design.
        </p>
      </div>
      <Image
        className="rounded-2xl shadow-[13px_11px_9px_7px_rgba(0,_0,_0,_0.1)]"
        draggable="false"
        data-aos="fade-down"
        data-aos-delay="1700"
        priority
        src="/portrait_bg_designed.png"
        alt="Portrait Picture"
        height={500}
        width={470}
      />
    </div>
  );
};

export default HeroSection;
