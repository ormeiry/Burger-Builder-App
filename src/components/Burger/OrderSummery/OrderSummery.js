import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";

const orderSummery = (props) => {
  const ingredientSummry = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A dekicious burger with the following ingredients:</p>
      <ul>{ingredientSummry}</ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default orderSummery;
