import React from "react";
import SkillsCard from "./SkillsCard";
import { Monitor, Server, Wrench } from "lucide-react";

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-y-15">
      <div
        className="flex flex-col justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-4xl font-bold">Skills</h1>
        <span className="text-muted-foreground mt-2">
          Technologies and tools I am proficient in
        </span>
      </div>
      <div className="grid grid-cols-1 semi-lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
        <div data-aos="fade-down" data-aos-delay="500">
          <SkillsCard
            development_title="Front End Development"
            description="The technologies I use to build responsive and dynamic applications."
            development="frontend"
            Icon={Monitor}
          />
        </div>
        <div data-aos="fade-down" data-aos-delay="800">
          <SkillsCard
            development_title="Back End Development"
            description="The technologies I use to build secure and scalable applications."
            development="backend"
            Icon={Server}
          />
        </div>
        <div data-aos="fade-down" data-aos-delay="1100">
          <SkillsCard
            development_title="Tools"
            description="The tools I use to develop, test, and manage my applications."
            development="tools"
            Icon={Wrench}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
