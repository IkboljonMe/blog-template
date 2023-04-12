import React from "react";

import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import classes from "./styles.module.scss";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={classes.sectionSubText}>Introduction</p>
        <h2 className={classes.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={classes.description}
      >
        Skilled in TypeScript and JavaScript, I am an experienced software
        developer with expertise in frameworks like React and Node.js. I
        prioritize close collaboration with clients to design and develop
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. A quick learner with a passion for bringing ideas to life,
        let's work together to create something great.
      </motion.p>
      {/* {
        TODO: FIX DEVICE
      } */}
      <div className={classes.servicesContainer}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
