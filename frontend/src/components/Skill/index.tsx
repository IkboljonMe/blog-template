import classes from "./styles.module.scss";
import { skills } from "../../constants";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import Tabs from "./TabsTitle/Tabs";
import Tab from "./TabsTitle/Tab";
import {
  reactJs,
  expressJS,
  nodejs,
  redux,
  firebase,
  android,
  materialUI,
  chakraUI,
  tailwindcss,
  bootstrap,
  sass,
  html,
  css3,
  js,
  java,
  kotlin,
  php,
  python,
  cpp,
  mongodb,
  mysql,
  postgresql,
  aws,
  heroku,
  netlify,
  digitalocean,
  jquery,
  gitvcs,
  github,
  wordpress,
} from "../../assets/skillsIcons";
const Skill = () => {
  const btn = document.querySelector(".btn");
  btn?.classList.add("activee");

  return (
    <div className={classes.skills}>
      <Tabs>
        <Tab title="Tab 1">
          <div className={classes.btn}>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h4>ReactJS</h4>
            </div>
            <div className={classes.icons}>
              <img src={expressJS} alt="" />
              <h4>ExpressJS</h4>
            </div>
            <div className={classes.icons}>
              <img src={nodejs} alt="" />
              <h4>NodeJS</h4>
            </div>
            <div className={classes.icons}>
              <img src={firebase} alt="" />
              <h4>Firebase</h4>
            </div>
            <div className={classes.icons}>
              <img src={android} alt="" />
              <h4>Android</h4>
            </div>
            <div className={classes.icons}>
              <img src={redux} alt="" />
              <h4>Redux</h4>
            </div>
            <div className={classes.icons}>
              <img src={materialUI} alt="" />
              <h4>MaterialUI</h4>
            </div>
            <div className={classes.icons}>
              <img src={chakraUI} alt="" />
              <h4>ChakraUI</h4>
            </div>
            <div className={classes.icons}>
              <img src={tailwindcss} alt="" />
              <h4>TailwindCSS</h4>
            </div>
            <div className={classes.icons}>
              <img src={bootstrap} alt="" />
              <h4>Bootstrap</h4>
            </div>
            <div className={classes.icons}>
              <img src={sass} alt="" />
              <h4>Sass</h4>
            </div>
            <div className={classes.icons}>
              <img src={html} alt="" />
              <h4>HTML</h4>
            </div>
            <div className={classes.icons}>
              <img src={css3} alt="" />
              <h4>CSS3</h4>
            </div>
            <div className={classes.icons}>
              <img src={js} alt="" />
              <h4>JavaScript</h4>
            </div>
            <div className={classes.icons}>
              <img src={java} alt="" />
              <h4>Java</h4>
            </div>
            <div className={classes.icons}>
              <img src={kotlin} alt="" />
              <h4>Kotlin</h4>
            </div>
            <div className={classes.icons}>
              <img src={php} alt="" />
              <h4>PHP</h4>
            </div>
            <div className={classes.icons}>
              <img src={python} alt="" />
              <h4>Python</h4>
            </div>
            <div className={classes.icons}>
              <img src={cpp} alt="" />
              <h4>C++</h4>
            </div>
            <div className={classes.icons}>
              <img src={mongodb} alt="" />
              <h4>MongoDB</h4>
            </div>
            <div className={classes.icons}>
              <img src={mysql} alt="" />
              <h4>MySql</h4>
            </div>
            <div className={classes.icons}>
              <img src={postgresql} alt="" />
              <h4>Postgresql</h4>
            </div>
            <div className={classes.icons}>
              <img src={aws} alt="" />
              <h4>AWS</h4>
            </div>
            <div className={classes.icons}>
              <img src={heroku} alt="" />
              <h4>Heroku</h4>
            </div>
            <div className={classes.icons}>
              <img src={netlify} alt="" />
              <h4>Netlify</h4>
            </div>
            <div className={classes.icons}>
              <img src={digitalocean} alt="" />
              <h4>DigitalOcean</h4>
            </div>
            <div className={classes.icons}>
              <img src={jquery} alt="" />
              <h4>Jquery</h4>
            </div>
            <div className={classes.icons}>
              <img src={gitvcs} alt="" />
              <h4>Git vcs</h4>
            </div>
            <div className={classes.icons}>
              <img src={github} alt="" />
              <h4>Github</h4>
            </div>
            <div className={classes.icons}>
              <img src={wordpress} alt="" />
              <h4>WordPress</h4>
            </div>
          </div>
        </Tab>
        <Tab title="Tab 2">
          <div className={classes.btn}>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={expressJS} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
          </div>
        </Tab>
        <Tab title="Tab 3">
          <div className={classes.btn}>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
            <div className={classes.icons}>
              <img src={reactJs} alt="" />
              <h3>Guthub</h3>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SectionWrapper(Skill, "skill", "#5504ACFF");
