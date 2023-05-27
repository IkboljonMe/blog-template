import { Skill } from "./index.types";
import {
  skillNextjs,
  skillPostgreSQL,
  skillPrisma,
  skillReactjs,
  skillNodejs,
  skillExpress,
  skillMongoDb,
  skillFireBase,
  skillHtmlcssjs,
  skillNextjsIcon,
  skillMaterialUI,
  skillSass,
  skillDocker,
  skillGitlubGithub,
  skillPattern,
  skillSolidPrinspl,
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
      {
        name: "MongoDb",
        icon: skillMongoDb,
        projects: [
          { name: "UzShop", link: "https://auction.com" },
          { name: "News", link: "https://myblog.com" },
        ],
      },
      {
        name: "Firebase",
        icon: skillFireBase,
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
        name: "HTML|CSS|JS",
        icon: skillHtmlcssjs,
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
      {
        name: "Nextjs",
        icon: skillNextjsIcon,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "App", link: "https://myblog.com" },
        ],
      },
      {
        name: "Material UI",
        icon: skillMaterialUI,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Portfolio", link: "https://myblog.com" },
        ],
      },
      {
        name: "Bootstrap",
        icon: skillDocker,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "Portfolio", link: "https://myblog.com" },
        ],
      },
      {
        name: "SASS",
        icon: skillSass,
        projects: [
          { name: "UzShop", link: "https://auction.com" },
          { name: "News", link: "https://myblog.com" },
        ],
      },
    ],
  },
  {
    name: "Additional",
    data: [
      {
        name: "Docker",
        icon: skillDocker,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "App", link: "https://myblog.com" },
        ],
      },
      {
        name: "Github|Gitlab CI/CD",
        icon: skillGitlubGithub,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "App", link: "https://myblog.com" },
        ],
      },
      {
        name: "Design Patterns",
        icon: skillPattern,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "App", link: "https://myblog.com" },
        ],
      },
      {
        name: "Solid Princeples",
        icon: skillSolidPrinspl,
        projects: [
          { name: "Auction", link: "https://auction.com" },
          { name: "App", link: "https://myblog.com" },
        ],
      },
    ],
  },
];
export default skills;
