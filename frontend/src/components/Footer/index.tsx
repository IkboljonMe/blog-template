import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div>
          <p>Copyright ©2023 IkboljonMe®. All rights reserved.</p>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.linkedin}>
        <h4>
          Designed With ❤️ By <Link to="/">IkboljonMe</Link>
        </h4>
      </div>
    </>
  );
}

export default Footer;
