import classes from "./styles.module.scss";
import { SectionWrapper } from "../../hoc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container, zoomIn, mainImg } from "../../utils/motion";

import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import broo from "../../assets/hero.png";
import { Tilt } from "react-tilt";

const Hero = () => {
  return (
    <section className={classes.heroSectionWrapper}>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={mainImg}
        className={classes.headerName}
      >
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
                  "Freelancer",
                  "Web Developer",
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
          <IoChevronDownOutline className={classes.downloadIcon} size={27} />{" "}
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
      </motion.div>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={mainImg}
        className={classes.headerImg}
      >
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
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Hero, "", "#f8f8f8");
