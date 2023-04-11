import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Testimonial } from "../../constants/index.types";
import classes from "./styles.module.scss";
interface FeedbackCardProps {
  feedback: Testimonial;
  index: number;
}
const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback, index }) => {
  const { testimonial, name, designation, company, image, surname } = feedback;
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className={classes.feedBackCard}
    >
      <p>"</p>
      <div className={classes.description}>
        <p>{testimonial}</p>
        <div>
          <div>
            <div>
              <span>@</span>
              <p>{name}</p>
              <p>{surname}</p>
            </div>
            <p>
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback_by-${name}`} />
        </div>
      </div>
    </motion.div>
  );
};

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

export default SectionWrapper(Feedbacks, "");
