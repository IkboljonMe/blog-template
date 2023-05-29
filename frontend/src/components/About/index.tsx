import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import classes from "./styles.module.scss";
import imgMe from "../../assets/profile2.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { Tilt } from "react-tilt";
const PDF_FILE_URL='http://localhost:5173/resumeMe.pdf'
const About = () => {
  const handleDownload = () => {
    const downloadUrl = 'https://example.com/path/to/file'; // Replace with your file URL

    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.target = '_blank';
    link.download = 'filename.ext'; // Specify the desired filename for the downloaded file

    // Dispatch a click event to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={classes.about}>
      <motion.div variants={textVariant()}>
        <p className={classes.sectionSubText}>Briefly</p>
        <h2 className={classes.sectionHeadText}>About <span>Me</span></h2>
      </motion.div>

      <div className={classes.aboutMeAndImg}>
        <div className={classes.cardImg}>
        <Tilt 
        options={{
          max: 17,
          transition: 0.5,
          scale: 1,
          speed: 450,
        }}
        >
        <img src={imgMe} alt="" />

        </Tilt>
        </div>
        <div className={classes.aboutMe}>
          <h2>I'm Ikboljon</h2>
          <h4>Full Stack Developer </h4>
          <p>
            I am a Full-Stack developer based in Pune, India. I am an
            Information Technology undergraduate from SPPU. I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <p>
            <span>Email:</span> Ikboljon@gmail.com
          </p>
          <p>
            <span>Place:</span> Uzbekistan, Tashkent
          </p>
          <button className={classes.resume}>
            Resume{" "}
            <AiOutlineDownload className={classes.downloadIcon} size={27} />{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about", "#fff");
