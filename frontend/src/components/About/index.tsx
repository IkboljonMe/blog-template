import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import imgMe from "../../assets/aboutMe.jpeg";
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
            <img src={imgMe} alt="aboutMe" />
          </Tilt>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={classes.aboutMe}
        >
          {/* <h2>Ikboljon Abdurasulov</h2>
          <h4>Full Stack Developer</h4> */}
          <p>
            Welcome to my portfolio! I'm a full-stack web developer with a
            passion for creating clean and scalable code. I thrive on solving
            problems and enjoy the challenge of finding elegant solutions. In
            the world of web development, I can speak multiple languages
            fluently. JavaScript is like my native language, while TypeScript
            and Python are my trusted companions. And when it comes to Dart,
            well, let's just say we're still working on our conversation skills!
            I believe that a diverse set of programming languages opens up
            endless possibilities in tackling different projects. Each language
            brings its own strengths, and I enjoy leveraging these strengths to
            build robust and efficient web applications. If you have any
            questions or would like to discuss a potential project or
            collaboration, please don't hesitate to reach out. I'm always
            excited to explore new opportunities and contribute to meaningful
            projects. Thank you for visiting my portfolio, and let's embark on a
            coding journey together!
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
