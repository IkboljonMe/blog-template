import { starbucks, tesla, shopify } from "../assets";
import { Experience } from "./index.types";
const experiences: Experience[] = [
  {
    title: "Volunteer Software Developer",
    company_name: "School Authorities  -  INTERNSHIP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2019 - April 2021",
    points: [
      "Developed a real-time blog project for a school using WordPress, utilizing plugins to meet specific requirements and improve functionality",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Designed the UI of web-based applications using CSS, with a focus on creating responsive layouts. Also identified non-responsive parts of the project and implemented responsive design updates to improve the user experience..",
    ],
  },
  {
    title: "Web developer",
    company_name: "Radcode  -  PART-TIME ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - present",
    points: [
      "Contributed to the creation of high-quality web-based applications and software solutions for clients, utilizing React, Prisma and PostgreSQL. Optimized specific parts of project to enhance performance and user experience.",
      "Implemented multi-stage services in Docker containerization to optimize debugging and caching, leading to a more efficient workflow with reduced caching time and faster debugging.",
      "Refactored the HTTP requests to RESTful services in multiple projects to conform to industry standards and utilized external libraries like SWR and React Query to simplify data management and improve code quality.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "BI-code  -  SELF-EMPLOYED",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
export default experiences;
