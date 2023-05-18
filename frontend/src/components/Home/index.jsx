import React from "react";
import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import IconsBox from "./IconsBox";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <FaBars className={classes.faBars}/>
      <Sidebar/>
      <div className={classes.homePage}>
        <motion.h1>Ikboljon Abdurasulov</motion.h1>
        <motion.h2 className={classes.animations}>
          I &apos;m a
          <span>
            <Typewriter
              words={[
                " Full-stack Web developer.",
                " Software Engineer.",
                " Freelancer.",
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
        <button>
          <span>Contact me</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
