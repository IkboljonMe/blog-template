import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works } from "./components";
import classes from "./styles.module.scss";

import Background from "./components/Background/Index";
function App() {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <div className={classes.navbarAndHeroSection}>
          <Navbar />
          <Hero />
          {/* <Background /> */}
        </div>
        <About />
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
