import { Project } from "./index.types";
import node from "../assets/skills/nodejs.svg";
const projects: Project[] = [
  {
    name: "Guees game",
    description:
      "Let's play Guess my number game. Guess number between 0 to 20",
    tags: [
      {
        name: "vanilla-javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: node,
    source_code_link: "https://github.com/IkboljonMe/guess-number-web",
  },
  {
    name: "Portfolio",
    description:
      "Beatifull portfolio website with React+Nextjs. Build your own",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: node,
    source_code_link: "https://github.com/IkboljonMe/commerce-project-web",
  },
  {
    name: "E-Commerce",
    description: "UzShop E-commerce shop with React. Fully responsive",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: node,
    source_code_link: "https://github.com/IkboljonMe/commerce-project-web",
  },
];

export default projects;
