import React from "react";
import classes, { Button } from "./Button.module.css";

const button = ({ disabled, clicked, btnType, children }) => (
  <button
    disabled={disabled}
    onClick={clicked}
    className={[Button, classes[btnType]].join(" ")}
  >
    {children}
  </button>
);

export default button;
