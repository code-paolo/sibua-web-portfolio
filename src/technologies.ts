export type TechnologyItem = {
  title: string;
  icon: string;
};

export type Technologies = {
  frontend?: TechnologyItem[];
  backend?: TechnologyItem[];
  tools?: TechnologyItem[];
};

export const technologies = {
  frontend: [
    {
      title: "React JS",
      icon: "/icons/react-icon.svg",
    },
    {
      title: "Next JS",
      icon: "/icons/nextjs-icon.svg",
    },
    {
      title: "HTML",
      icon: "/icons/html-icon.png",
    },
    {
      title: "CSS",
      icon: "/icons/css-icon.png",
    },
    {
      title: "Tailwind CSS",
      icon: "/icons/tailwind-icon.png",
    },
    {
      title: "JavaScript",
      icon: "/icons/js-icon.png",
    },
    {
      title: "TypeScript",
      icon: "/icons/ts-icon.png",
    },
    {
      title: "Bootstrap",
      icon: "/icons/bootstrap-icon.png",
    },
    {
      title: "Shadcn UI",
      icon: "/icons/shadcn-icon.png",
    },
  ],
  backend: [
    {
      title: "Laravel",
      icon: "/icons/laravel-icon.png",
    },
    {
      title: "MySQL",
      icon: "/icons/mysql-icon.png",
    },
    {
      title: "Firebase",
      icon: "/icons/firebase-icon.png",
    },
    {
      title: "MongoDB",
      icon: "/icons/mongodb-icon.png",
    },
    {
      title: "ExpressJS",
      icon: "/icons/express-icon.png",
    },
    {
      title: "PHP",
      icon: "/icons/php-icon.png",
    },
  ],
  tools: [
    {
      title: "VSCode",
      icon: "/icons/vscode-icon.png",
    },
    {
      title: "Github",
      icon: "/icons/github-icon.png",
    },
  ],
};
