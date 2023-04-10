import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas";
import classes from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={classes.heroSectionWrapper}>
      <div className={classes.heroTopContainer}>
        <div className={classes.dividerSection}>
          <div className={classes.circleTop} />
          <div className={classes.longDivider} />
        </div>

        <div>
          <h1 className={classes.heroHeadText}>
            Hi, I'm <span className={classes.heroName}>Adrian</span>
          </h1>
          <p className={classes.heroSubText}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className={classes.bottomBtnContainer}>
        <a href="#about" className={classes.btnDown}>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
