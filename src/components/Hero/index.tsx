import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas";
import { ErrorBoundary } from "react-error-boundary";
import classes from "./styles.module.scss";
import { socialLinks } from "../../constants";
import { Link } from "react-router-dom";
import { SocialLink } from "../../constants/index.types";
import { BsGithub, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs";
const getIcon = (name: string) => {
  if (name == "Telegram") {
    return <BsTelegram />;
  }
  if (name == "Github") {
    return <BsGithub />;
  }
  if (name == "Linkedin") {
    return <BsLinkedin />;
  }
  if (name == "Youtube") {
    return <BsYoutube />;
  } else {
    return;
  }
};

const Hero = () => {
  return (
    <section className={classes.heroSectionWrapper}>
      <div className={classes.lgHeroTopContainer}>
        <p>Hi, I'm</p>
        <h1>Ikboljon Abdurasulov</h1>
        <h2>Software Engineer</h2>
        <div>
          {socialLinks.map((link: SocialLink) => (
            <Link to={link.link}>
              <motion.i
                whileHover={{
                  scale: 1.2,
                }}
              >
                {getIcon(link.name)}
              </motion.i>
            </Link>
          ))}
        </div>
      </div>
      <div className={classes.computer}>
        <ComputersCanvas />
      </div>
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
