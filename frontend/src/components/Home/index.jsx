import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "../Login"

import classes from "./styles.module.scss";
import MainSection from "./MainSection";

const Home = () => {
  return (
    <div>
      <div className={classes.wrapper}>
        <Login/>
        <Navbar />
        <MainSection />
        <Footer />

      </div>
    </div>
  );
};

export default Home;
