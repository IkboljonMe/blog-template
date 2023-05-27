import js from "../../../assets/socialIcons/js.png";
import python from "../../../assets/socialIcons/python.png";
import node from "../../../assets/socialIcons/nodejs.png";
import angular from "../../../assets/socialIcons/angular.png";
import html from "../../../assets/socialIcons/html.png";
import react from "../../../assets/socialIcons/react.png";
import ts from "../../../assets/socialIcons/ts.png";
import vuejs from "../../../assets/socialIcons/vuejs.png";
import code from "../../../assets/socialIcons/code.png";
import classes from "./styles.module.scss";

const SkillAnimation = () => {
  return (
    <div className={classes.lgHeroTopContainer2}>
      <div className={classes.container}>
        <div className={classes.carousel}>
          <div className={classes.image}>
            <span>
              <img src={python} alt="python" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={js} alt="js" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={node} alt="node" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={react} alt="react" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={vuejs} alt="vuejs" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={ts} alt="ts" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={html} alt="html" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={angular} alt="angular" />
            </span>
          </div>
          <div className={classes.image}>
            <span>
              <img src={code} alt="code" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAnimation;
