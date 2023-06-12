import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import classes from "./styles.module.scss";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className={classes.container}>
      <motion.div variants={slideIn("top", "tween", 0.2, 1)}>
        <p className={classes.sectionSubText}>Professional</p>
        <h2 className={classes.sectionHeadText}>
          Experience <span>Summary</span>
        </h2>
      </motion.div>
      <div className={classes.timelineWrapper}>
        <VerticalTimeline lineColor="#f0662b">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience", "#fff");
