import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import { Logo } from "./Logo.module.css";

const logo = () => (
  <div className={Logo}>
    <img src={burgerLogo} alt="Burger Builder" />
  </div>
);

export default logo;
