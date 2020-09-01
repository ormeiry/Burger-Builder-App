import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  console.log(props);
  const ingredients = Object.keys(props.ingredients).map((inKey) => {
    return (
      <li
        key={inKey}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >{`${inKey}: ${props.ingredients[inKey]}`}</li>
    );
  });
  return (
    <div className={classes.Order}>
      <ul>
        <h4>Ingredients:</h4>
        {ingredients}
      </ul>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
