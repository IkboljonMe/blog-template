import classes from "./styles.module.scss";
import { skills } from "../../constants";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

const Skill = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={classes.sectionSubText}>Briefly</p>
        <h2 className={classes.sectionHeadText}>About me</h2>
      </motion.div>
      <div className={classes.servicesContainer}>
        {skills.map((development, index) => (
          <SkillCard development={development} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skill, "skill");
