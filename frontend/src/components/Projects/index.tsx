import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { Project } from "../../constants/index.types";
import classes from "./styles.module.scss";
import ProjectCard from "./ProjectCard";

const Projects = () => {
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

export default SectionWrapper(Projects, "",'#fff');
