import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Skill,
} from "./components";
import classes from "./styles.module.scss";
function App() {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <div className={classes.navbarAndHeroSection}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skill />
        <Experience />
        <Works />
        <div className={classes.contactSection}>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
