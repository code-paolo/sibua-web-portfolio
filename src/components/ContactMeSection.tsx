import {
  ArrowBigDown,
  Github,
  Linkedin,
  Mail,
  ThumbsUpIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const ContactMeSection = () => {
  return (
    <div className="flex flex-col mb-[300px]">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-4xl font-bold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Contact me
        </h1>
        <p
          className="text-muted-foreground mt-15 max-w-prose leading-8 text-justify "
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <strong>
            I’m actively seeking opportunities where I can contribute as a
            Full-Stack Developer, and I’m open to full-time roles or
            collaborations.
          </strong>{" "}
          where I can contribute as a&nbsp;
          <span className="underline underline-offset-4">
            Full-Stack Developer
          </span>
          . Get in touch if you’re hiring or have a role that fits my skills.
        </p>
        <div
          className="mt-5 flex lg:flex-row flex-col gap-x-10 max-w-prose items-center"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h2 className=" text-justify">
            Feel free to reach out if you’re looking for someone to build and
            deliver efficient, modern web solutions.
          </h2>
          <ArrowBigDown fill="gold" size={50} />
        </div>
        <div>
          <ul className="mt-10 flex flex-col gap-y-5">
            <li
              className="flex gap-x-5 "
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <Link
                href="https://www.linkedin.com/in/paolo-sibua-268309222/"
                target="_blank"
              >
                <Button
                  variant="link"
                  className="cursor-pointer text-sm lg:text-base"
                >
                  <Linkedin color="#0077B5" fill="white" />
                  View LinkedIn
                </Button>
              </Link>
            </li>
            <li
              className="flex gap-x-5"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <Link href="mailto:paologsibs@gmail.com" target="_blank">
                <Button
                  variant="link"
                  className="cursor-pointer text-sm lg:text-base"
                >
                  <Mail color="green" />
                  paologsibs@gmail.com
                </Button>
              </Link>
            </li>
            <div
              className="font-bold flex gap-x-5"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <h2>You are free to view my Github</h2>{" "}
              <ThumbsUpIcon color="green" />
            </div>
            <li
              className="flex gap-x-5"
              data-aos="fade-right"
              data-aos-delay="1400"
            >
              <Link href="https://github.com/code-paolo/" target="_blank">
                <Button
                  variant="link"
                  className="cursor-pointer text-sm lg:text-base"
                >
                  <Github />
                  View Github
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
