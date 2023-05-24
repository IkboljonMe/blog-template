import classes from "./styles.module.scss";
import { socialLinks } from "../../constants";
import { Link } from "react-router-dom";
import { SocialLink } from "../../constants/index.types";
import { BsGithub, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";
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
    </section>
  );
};

export default Hero;
