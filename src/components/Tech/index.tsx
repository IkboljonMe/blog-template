import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import classes from "./styles.module.scss";
const Tech = () => {
  return (
    <div className={classes.wrapper}>
      {technologies.map((technology) => (
        <div key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
