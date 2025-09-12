import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
type ProjectCard = {
  github?: string;
  project_image?: string;
  project_name: string;
  project_description: string;
};

const ProjectCard = ({
  github,
  project_image = "/project_placeholder.png",
  project_name,
  project_description,
}: ProjectCard) => {
  return (
    <Card className=" h-[500px] w-[350px] p-0 hover:shadow-2xl group ">
      <div className="overflow-hidden">
        <Image
          priority
          draggable="false"
          height={500}
          width={500}
          alt={`${project_name} image`}
          src={project_image}
          className="h-[250px] object-cover group-hover:scale-110  transition-transform ease-in-out rounded-t-md"
        />
      </div>
      <CardContent className="flex flex-col gap-y-2 h-[200px] justify-between">
        <div>
          <CardTitle>{project_name}</CardTitle>
          <CardDescription className="mt-2 text-justify">
            {project_description}
          </CardDescription>
        </div>
        {github && (
          <Link href={github} target="_blank">
            <Button className=" h-[40px] ">
              View Github <Github />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
