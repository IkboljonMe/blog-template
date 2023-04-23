import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas";
import { ErrorBoundary } from "react-error-boundary";
import classes from "./styles.module.scss";
import { BsGithub, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs";

const Hero = () => {
  return (
    <section className={classes.heroSectionWrapper}>
      <div className={classes.lgHeroTopContainer}>
        <h1>
          I'm <span>Ikboljon Abdurasulov</span>
        </h1>
        <h2>Software Engineer</h2>
        <div>
          <BsGithub />
          <BsLinkedin />
          <BsTelegram />
          <BsYoutube />
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
