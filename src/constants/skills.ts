import node from "../assets/skills/nodejs.svg";
import expressjs from "../assets/skills/expressjs.svg";
import prisma from "../assets/skills/prisma.svg";
import postgresql from "../assets/skills/postgresql.svg";
import nextjs from "../assets/skills/nextjs.svg";
import react from "../assets/skills/react.svg";
import { Skill } from "./index.types";
const skills: Skill[] = [
  {
    name: "Backend developer",
    data: [
      {
        name: "Nodejs",
        icon: node,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Blog", link: "https://myblog.com" },
        ],
      },
      {
        name: "Express",
        icon: expressjs,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Blog", link: "https://myblog.com" },
        ],
      },
      {
        name: "PostgreSQL",
        icon: postgresql,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "BlogUz", link: "https://myblog.com" },
        ],
      },
      {
        name: "Prisma",
        icon: prisma,
        projects: [
          { name: "UzShop", link: "https://auction.com" },
          { name: "News", link: "https://myblog.com" },
        ],
      },
    ],
  },
  {
    name: "Front-end developer",
    data: [
      {
        name: "Nexts",
        icon: nextjs,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "App", link: "https://myblog.com" },
        ],
      },
      {
        name: "Reactjs",
        icon: react,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Portfolio", link: "https://myblog.com" },
        ],
      },
    ],
  },
];
export default skills;
