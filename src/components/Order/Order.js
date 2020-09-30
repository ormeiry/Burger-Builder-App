import React from "react";
import { Order } from "./Order.module.css";

const order = ({ ingredients, price }) => {
  const ingredientsList = Object.keys(ingredients).map((inKey) => {
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
      >{`${inKey}: ${ingredients[inKey]}`}</li>
    );
  });
  return (
    <div className={Order}>
      <ul>
        <h4>Ingredients:</h4>
        {ingredientsList}
      </ul>
      <p>
        Price: <strong>USD {price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
