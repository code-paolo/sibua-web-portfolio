import React from "react";
import { projects } from "../../projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
        <span className="text-muted-foreground mt-2">Recent Projects</span>
      </div>
      {projects.map((project, idx) => (
        <ProjectCard
          key={`${project.project_name}-${idx}`}
          project_name={project.project_name}
          project_description={project.project_description}
          project_image={project.project_image}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default Projects;
