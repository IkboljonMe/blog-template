import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import classes from "./styles.module.scss";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
  return (
    <div className={classes.feedBackWrapper}>
      <div className={classes.titleContainer}>
        <motion.div variants={textVariant()}>
          <p className={classes.sectionSubText}>What others say</p>
          <h2 className={classes.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={classes.feedBacksContainer}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            feedback={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "", "#fff");
