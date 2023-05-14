import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import classes from "./styles.module.scss";
import MainSection from "./MainSection";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
