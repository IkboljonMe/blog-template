import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import Tabs from "./TabsTitle/Tabs";
import Tab from "./TabsTitle/Tab";
import { skills } from "../../constants";
const Skill = () => {
  return (
    <div className={classes.skills}>
      <Tabs>
        {skills.map(({ title, data }) => (
          <Tab title={title}>
            <div className={classes.btn}>
              {data.map(({ icon, name }) => (
                <div className={classes.icons}>
                  <img src={icon} alt="" />
                  <h4>{name}</h4>
                  <h5>Intermediate</h5>
                </div>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default SectionWrapper(Skill, "skills", "#5504ACFF");
