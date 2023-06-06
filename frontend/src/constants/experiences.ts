import { Experience } from "./index.types";
import radcode from "../assets/experience/radcoode.svg";
import bicode from "../assets/experience/bicode.png";
import school from "../assets/experience/school.png";
const experiences: Experience[] = [
  {
    title: "MUIMI",
    company_name: "Internship Trainee WordPress Developer",
    icon: school,
    iconBg: "#f0662bff",
    date: "December 2019 - April 2021",
    points: [
      "Developed a real-time blog project for a school using WordPress, utilizing plugins to meet specific requirements and improve functionality",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed responsive layouts using CSS for web-based applications, prioritizing user experience.",
    ],
  },
  {
    title: "Radcode",
    company_name: "Internship Trainee Frontend React Developer",
    icon: radcode,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Collaborated on high-quality web applications using React, Prisma, and PostgreSQL. ",
      "Optimized project performance and user experience. Implemented Docker containerization for efficient debugging and caching. ",
      " Refactored HTTP requests to RESTful services, leveraging SWR and React Query for improved data management.",
      "Built a teams workflow service in Next.js with Prisma ORM, ensuring responsiveness and streamlined collaboration",
    ],
  },
  {
    title: "BI-code",
    company_name: "Full Stack Web Developer",
    icon: bicode,
    iconBg: "#000",
    date: "Jan 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
export default experiences;
