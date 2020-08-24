import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Builder" />
  </div>
);

export default logo;
