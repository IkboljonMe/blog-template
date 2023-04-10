import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { Experience } from "../../constants/index.types";
import classes from "./styles.module.scss";
interface ExperienceCardProps {
  experience: Experience;
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={classes.experienceImg}>
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div className={classes.experienceCardTop}>
        <h3>{experience.title}</h3>
        <p style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className={classes.experienceCardContent}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceFc = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={classes.sectionSubText}>What I have done so far</p>
        <h2 className={classes.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className={classes.timelineWrapper}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(ExperienceFc, "work");
