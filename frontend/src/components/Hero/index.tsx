import classes from "./styles.module.scss";
import { SectionWrapper } from "../../hoc";
import { socialLinks } from "../../constants";
import { Link } from "react-router-dom";
import { SocialLink } from "../../constants/index.types";
import { motion } from "framer-motion";
import {
  BsDeviceHdd,
  BsDeviceSsd,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import SkillAnimation from "./SkillAnimation";
import Background from "../Background/Index";
import ParticleContainer from "../Background/Index";
import broo from "../../assets/hero.png";
import { Tilt } from "react-tilt";
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
      <div className={classes.headerName}>
        <h1>Hi There,</h1>
        <h1>
          I'm Ikboljon <span>Abdurasulov</span>
        </h1>
        <p>
          I Am
          <span>
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Web Designing",
                  "Frontend Developer",
                  "Backend Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <button>
          About Me{" "}
          <AiOutlineDownload className={classes.downloadIcon} size={27} />{" "}
        </button>
        <div className={classes.socialIcons}>
         
          <Link to="/">
            <BsLinkedin className={classes.socialIcon} size={20} />
          </Link>
          <Link to="/">
            <BsGithub className={classes.socialIcon} size={20} />
          </Link>
          <Link to="/">
            <BsInstagram className={classes.socialIcon} size={20} />
          </Link>
          <Link to="/">
            <BsTelegram className={classes.socialIcon} size={20} />
          </Link>
          <Link to="/">
            <BsTwitter className={classes.socialIcon} size={20} />
          </Link>
        
        </div>
      </div>
      <div className={classes.headerImg}>
        <Tilt
          options={{
            max: 25,
            transition: 0.3,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={broo} alt="" />
        </Tilt>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "", "#fff");
