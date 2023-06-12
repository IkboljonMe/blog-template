import { VerticalTimelineElement } from "react-vertical-timeline-component";
import classes from "./styles.module.scss";
import { Experience } from "../../constants/index.types";
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#F2F0EB",
        color: "#000",
      }}
      style={{ margin: 0, padding: 0 }}
      contentArrowStyle={{ borderRight: "7px solid  #F2F0EB" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: "#000" }}
      icon={
        <div className={classes.experienceImg}>
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div className={classes.experienceCardTop}>
        <h3>{experience.title}</h3>
        <p style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className={classes.experienceCardContent}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
    
  );
};
export default ExperienceCard;
