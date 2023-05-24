import classes from "./styles.module.scss";
import { socialLinks } from "../../constants";
import { Link } from "react-router-dom";
import { SocialLink } from "../../constants/index.types";
import { BsGithub, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs";
import js from "../../assets/socialIcons/js.png";
import python from "../../assets/socialIcons/python.png";
import node from "../../assets/socialIcons/nodejs.png";
import angular from "../../assets/socialIcons/angular.png";
import html from "../../assets/socialIcons/html.png";
import react from "../../assets/socialIcons/react.png";
import ts from "../../assets/socialIcons/ts.png";
import vuejs from "../../assets/socialIcons/vuejs.png";
import code from "../../assets/socialIcons/code.png";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import SkillAnimation from "./SkillAnimation";
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
      <SkillAnimation />
      <div className={classes.lgHeroTopContainer}>
        <p>Hi, I'm</p>
        <h1>Ikboljon Abdurasulov</h1>
        <h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("GeeksForGeeks")

                .pauseFor(Infinity)
                .deleteAll()
                .typeString("Welcomes You")
                .start();
            }}
          />
        </h2>

        <div>
          {socialLinks.map((link: SocialLink) => (
            <Link to={link.link}>
              <i className={classes.icons}>{getIcon(link.name)}</i>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
