import { Skill } from "./index.types";
import {
  skillNextjs,
  skillPostgreSQL,
  skillPrisma,
  skillReactjs,
  skillNodejs,
  skillExpress,
} from "../assets/skills";
const skills: Skill[] = [
  {
    name: "Backend developer",
    data: [
      {
        name: "Nodejs",
        icon: skillNodejs,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Blog", link: "https://myblog.com" },
        ],
      },
      {
        name: "Express",
        icon: skillExpress,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Blog", link: "https://myblog.com" },
        ],
      },
      {
        name: "PostgreSQL",
        icon: skillPostgreSQL,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "BlogUz", link: "https://myblog.com" },
        ],
      },
      {
        name: "Prisma",
        icon: skillPrisma,
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
        name: "Nextjs",
        icon: skillNextjs,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "App", link: "https://myblog.com" },
        ],
      },
      {
        name: "Reactjs",
        icon: skillReactjs,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Portfolio", link: "https://myblog.com" },
        ],
      },
    ],
  },
];
export default skills;
