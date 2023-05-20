import { Testimonial } from "../../constants/index.types";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

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
export default FeedbackCard;
