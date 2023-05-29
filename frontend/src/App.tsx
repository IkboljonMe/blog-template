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

import Background from "./components/Background/Index";
function App() {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Background />
          <div className={classes.navbarAndHeroSection}>
            <Navbar />
            <Hero />
          </div>
        </div>
        <div className={classes.emptyPlace}>

        </div>
        <About />
        <Skill />
        <Experience />
        <div className={classes.contactSection}>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
