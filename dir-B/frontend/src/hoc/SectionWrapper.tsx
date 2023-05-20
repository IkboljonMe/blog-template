import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import classes from "./styles.module.scss";
//We can call this HOC design pattern:
const StarWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={classes.sectionMotion}
      >
        <span className={classes.hashSpan} id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
