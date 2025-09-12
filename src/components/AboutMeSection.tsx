import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Download, ScrollText } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-4xl font-bold">About Me</h1>
        <span className="text-muted-foreground mt-2">Get to Know Me</span>
      </div>
      <div className="flex lg:flex-row flex-col gap-y-10 lg:gap-x-32 ">
        <Image
          data-aos="fade-left"
          data-aos-delay="200"
          src="/graduation_pic.jpg"
          alt="Graduation Picture"
          height={500}
          width={500}
          className="h-[600px] w-[450px] rounded-md mt-16 shadow-[13px_11px_9px_7px_rgba(0,_0,_0,_0.1)] "
        />
        <div data-aos="fade-right" data-aos-delay="400">
          <p className="max-w-prose text-muted-foreground text-justify mt-15 tracking-wider text-sm/9 lg:text-lg/9 ">
            My journey in programming began with a curiosity about how websites
            worked, starting with HTML and CSS. Over the years, that curiosity
            evolved into a passion, leading me to earn a&nbsp;
            <strong>
              Bachelor’s Degree in Information Technology with a specialization
              in Mobile and Web Applications
            </strong>
            &nbsp;from&nbsp;
            <Badge className="bg-[#003DA7] text-yellow-400 tracking-wider text-sm leading-tight">
              National University Baliwag <ScrollText fill="gold" />
            </Badge>
            . Today, I am a&nbsp;
            <span className=" underline underline-offset-4">
              Full-Stack Developer
            </span>
            &nbsp; with hands-on experience in building responsive and efficient
            web applications. I continue to learn and experiment with modern
            tools to deliver seamless and innovative user experiences.
          </p>
          <Link
            download
            href="/Sibua_Resume_2025.pdf"
            className="mt-10 w-[178px]"
          >
            <Button className=" w-[250px] mt-5">
              Download Resume <Download />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
