import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationItem, active } from "./NavigationItem.module.css";

const navigationItem = ({ children, link }) => (
  <li className={NavigationItem}>
    <NavLink activeClassName={active} to={link} exact>
      {children}
    </NavLink>
  </li>
);

export default navigationItem;
