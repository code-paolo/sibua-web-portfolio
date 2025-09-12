import { ArrowBigDown, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const ContactMeSection = () => {
  return (
    <div className="flex flex-col mb-[300px]">
      <div
        className="flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-4xl font-bold">Contact me</h1>
        <p className="text-muted-foreground mt-15 max-w-prose leading-8 text-justify ">
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
        <div className="mt-5 flex lg:flex-row flex-col gap-x-10 max-w-prose items-center">
          <h2 className=" text-justify">
            Feel free to reach out if you’re looking for someone to build and
            deliver efficient, modern web solutions
          </h2>
          <ArrowBigDown fill="gold" size={30} />
        </div>
        <div>
          <ul className="mt-10 flex flex-col gap-y-5">
            <li className="flex gap-x-5 ">
              <Link
                href="https://www.linkedin.com/in/paolo-sibua-268309222/"
                target="_blank"
              >
                <Button
                  variant="link"
                  className="cursor-pointer text-sm lg:text-base"
                >
                  <Linkedin color="#0077B5" fill="white" />
                  Linkedin
                </Button>
              </Link>
            </li>
            <li className="flex gap-x-5">
              <Link href="mailto:paologsibs@gmail.com" target="_blank">
                <Button variant="link" className="cursor-pointer">
                  <Mail color="green" />
                  paologsibs@gmail.com
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
