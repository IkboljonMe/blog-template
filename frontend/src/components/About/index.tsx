import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import imgMe from "../../assets/profile2.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";

import CV from "../../assets/cv.9502c5eda7efc6c3a134.pdf";

const About = () => {
  return (
    <div className={classes.about}>
      <motion.div variants={slideIn("top", "tween", 0.2, 1)}>
        <p className={classes.sectionSubText}>Briefly</p>
        <h2 className={classes.sectionHeadText}>
          About <span>Me</span>
        </h2>
      </motion.div>
      <div className={classes.aboutMeAndImg}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={classes.cardImg}
        >
          <Tilt
            options={{
              max: 17,
              transition: 0.5,
              scale: 1,
              speed: 450,
            }}
          >
            <img src={imgMe} alt="" />
          </Tilt>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={classes.aboutMe}
        >
          <h2>I'm Ikboljon</h2>
          <h4>Full Stack Developer </h4>
          <p>
            I am a Full-Stack developer based in Pune, India. I am an
            Information Technology undergraduate from SPPU. I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <p>
            <span>Email:</span> Ikboljon@gmail.com
          </p>
          <p>
            <span>Place:</span> Uzbekistan, Tashkent
          </p>
          <Link to={CV} download target="_blank">
            <button className={classes.resume}>
              Resume
              <AiOutlineDownload className={classes.downloadIcon} size={27} />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about", "#fff");
