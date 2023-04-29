import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import classes from "./styles.module.scss";
import SkillCard from "./SkillCard";
import { skills } from "../../constants";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={classes.sectionSubText}>Briefly</p>
        <h2 className={classes.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={classes.description}
      >
        I have expertise in using popular programming languages such as
        TypeScript, JavaScript, and Python. As an experienced software
        developer, I have worked with various frameworks like React, Next.js,
        and Node.js. Additionally, I am also experienced in writing tests using
        Jest and Cypress, which are popular testing frameworks in the JavaScript
        ecosystem. With these tools, I can write efficient and reliable
        automated tests for web applications. In addition, I have experience
        with containerization using Docker, a popular platform for creating,
        deploying, and running applications in containers. By using Docker, I
        can create reproducible development environments and easily deploy
        applications to a variety of hosting platforms. Moreover, I have
        integrated CI/CD pipelines for efficient and continuous deployment. I
        understand the importance of automating the software delivery process
        and ensuring that each change is properly tested and deployed. Overall,
        I am a quick learner with a passion for bringing ideas to life. I am
        always looking for new and innovative ways to solve complex problems.
        Let's work together to create something great!
      </motion.p>
      {/* {
        TODO: FIX DEVICE
      } */}
      <div className={classes.servicesContainer}>
        {skills.map((development, index) => (
          <SkillCard development={development} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
