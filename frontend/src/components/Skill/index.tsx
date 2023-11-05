import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import Tabs from "./TabsTitle/Tabs";
import Tab from "./TabsTitle/Tab";
import { skills } from "../../constants";
import { useState } from "react";
import Modal from "./Modal";
import { slideIn } from "../../utils/motion";
import { react } from "../../assets/modalImages";
import { MdViewStream } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
const Skill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className={classes.container}>
      <motion.div>
        <p className={classes.sectionSubText}>What</p>
        <h2 className={classes.sectionHeadText}>
          I'm Capable <p style={{ color: "#f0662bff" }}>Of</p>
        </h2>
      </motion.div>
      <div className={classes.skills}>
        <Tabs>
          {skills.map(({ title, data }) => (
            <Tab title={title}>
              <div className={classes.btn}>
                {data.map(({ icon, name,text }, index) => (
                  <motion.div
                    // onClick={() => setIsModalOpen(true)}
                    className={classes.card}
                  >
                    <div className={classes.name}>
                      <h2>{name}</h2>
                      <img src={icon} alt="Avatar" />
                    </div>
                    <p>
                          {text}
                        </p>
                    <div className={classes.overlay}>
                      <div className={classes.text}>
                       <div className={classes.listItem}>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                       <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                       </ul>
                       </div>
                        <div className={classes.btns}>
                          <button>Views <MdViewStream size={20}/></button>
                          <button>Code<BiCodeAlt size={20}/></button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SectionWrapper(Skill, "skills", "#fff");
