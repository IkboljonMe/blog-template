import React from "react";
import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import IconsBox from "./IconsBox";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <motion.h1>Ikboljon Abdurasulov</motion.h1>
        <motion.h2>
          I&apos;m a
          <span>
            <Typewriter
              words={[
                "Full-stack Web developer.",
                "Software Engineer.",
                "Freelancer.",
              ]}
              loop={{}}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={20}
            />
          </span>
        </motion.h2>
        <IconsBox />
      </div>
    </div>
  );
};

export default Home;
