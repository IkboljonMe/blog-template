import classes from "./styles.module.scss";
import { socialLinks } from "../../constants";
import { Link } from "react-router-dom";
import { SocialLink } from "../../constants/index.types";
import { BsGithub, BsLinkedin, BsTelegram, BsYoutube } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import SkillAnimation from "./SkillAnimation";
import Background from "../Background/Index";
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
      <div className={classes.background}>
        <Background />
      </div>
      {/* <div className={classes.lgHeroTopContainer}>
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
      </div> */}
      <SkillAnimation />
    </section>
  );
};

export default Hero;
