import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas";
import { ErrorBoundary } from "react-error-boundary";
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
            Hi, I'm <span className={classes.heroName}>Ikboljon</span>
          </h1>
          <p className={classes.heroSubText}>
            a passionate developer who loves,
            <br className="sm:block hidden" />
            bringing ideas into reality through code
          </p>
        </div>
      </div>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <ComputersCanvas />
      </ErrorBoundary>

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
