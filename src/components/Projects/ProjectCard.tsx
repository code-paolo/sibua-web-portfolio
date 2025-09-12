import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
type ProjectCard = {
  animation_delay?: number;
  github?: string;
  project_image?: string;
  project_name: string;
  project_description: string;
};

const ProjectCard = ({
  animation_delay = 700,
  github,
  project_image = "/project_placeholder.png",
  project_name,
  project_description,
}: ProjectCard) => {
  return (
    <Card
      className="rounded-none h-[480px] w-[350px] p-0 hover:shadow-2xl group overflow-hidden"
      data-aos="fade"
      data-aos-delay={animation_delay}
    >
      <Image
        height={700}
        width={600}
        alt={`${project_name} image`}
        src={project_image}
        className="h-[250px] object-cover group-hover:scale-110  transition-transform ease-in-out"
      />
      <CardContent className="flex flex-col gap-y-2 ">
        <CardTitle>{project_name}</CardTitle>
        <CardDescription>{project_description}</CardDescription>
        {github && (
          <Link href={github} target="_blank">
            <Button className=" h-[40px] mt-5 ">
              View Github <Github />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
