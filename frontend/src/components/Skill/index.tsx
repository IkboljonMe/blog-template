import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import Tabs from "./TabsTitle/Tabs";
import Tab from "./TabsTitle/Tab";
import { skills } from "../../constants";
import { useState } from "react";
import Modal from "./Modal";
const Skill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={classes.skills}>
      <Tabs>
        {skills.map(({ title, data }) => (
          <Tab title={title}>
            <div className={classes.btn}>
              {data.map(({ icon, name }, index) => (
                <motion.div
                onClick={() => setIsModalOpen(true)}
                  className={classes.icons}
                >
                  <img src={icon} alt="" />
                  <h4>{name}</h4>
                  <h5>Intermediate</h5>
                </motion.div>
              ))}
            </div>
            <Modal isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default SectionWrapper(Skill, "skills", "#5504ACFF");
