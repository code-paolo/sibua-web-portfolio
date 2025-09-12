import React from "react";
import { Card } from "../ui/card";
import { LucideIcon } from "lucide-react";
import { Technologies, technologies } from "@/technologies";
import Image from "next/image";

type SkillsCard = {
  development_title: "Front End Development" | "Back End Development" | "Tools";
  Icon: LucideIcon;
  description: string;
  development: keyof Technologies;
};

const SkillsCard = ({
  development_title,
  Icon,
  description,
  development,
}: SkillsCard) => {
  const item = technologies[development];
  return (
    <Card className="h-[470px] w-auto   p-10 rounded-md  ">
      <div className="flex gap-x-3">
        <Icon size={50} />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">{development_title}</h1>
          <p className="text-muted-foreground text-sm text-justify">
            {description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4 gap-5">
        {item.map((item) => (
          <div
            key={item.icon}
            className="hover:scale-120 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center"
          >
            <Image
              draggable="false"
              loading="lazy"
              className="h-12 w-12"
              src={item.icon}
              alt={`${item.title} Logo`}
              width={700}
              height={700}
            />
            <h2 className="text-xs font-medium mt-2 0">{item.title}</h2>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillsCard;
