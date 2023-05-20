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
    </section>
  );
};

export default Hero;
