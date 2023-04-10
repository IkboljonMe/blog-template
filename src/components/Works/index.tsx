import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { Project } from "../../constants/index.types";
import classes from "./styles.module.scss";
import clsx from "clsx";

interface ProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { name, description, tags, image, source_code_link } = project;
  return (
    <motion.div variants={fadeIn("up", "spring", +index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={classes.cardTilt}
      >
        <div className={classes.imageContainer}>
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className={classes.githubIconBtn}>
            <div onClick={() => window.open(source_code_link, "_blank")}>
              <img src={github} alt="source code" />
            </div>
          </div>
        </div>

        <div className={classes.descriptionContainer}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className={classes.tagsContainer}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{ color: `${tag.color}` }}
              className={clsx(classes.tag, `${classes[tag.color]}`)}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className={classes.wrapper}>
      <motion.div variants={textVariant()}>
        <p className={classes.sectionSubText}>My work</p>
        <h2 className={classes.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className={classes.topWorksSection}>
        <motion.p variants={fadeIn("", "", 0.1, 1)}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className={classes.projectsSection}>
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
