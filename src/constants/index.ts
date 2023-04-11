import {
  NavLink,
  Service,
  Technology,
  Experience,
  Testimonial,
  Project,
} from "./index.types";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  guess,
  portfolio,
  eCommerce,
  threejs,
} from "../assets";

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: Service[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

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

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara",
    surname: "Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris",
    surname: "Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa",
    surname: "Wange",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

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
    image: guess,
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
    image: portfolio,
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
    image: eCommerce,
    source_code_link: "https://github.com/IkboljonMe/commerce-project-web",
  },
];

export { services, technologies, experiences, testimonials, projects };
