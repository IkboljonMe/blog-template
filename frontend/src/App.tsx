import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Skill,
  Footer,
  Background,
} from "./components";

import classes from "./styles.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
