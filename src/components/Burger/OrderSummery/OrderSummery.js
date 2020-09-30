import React from "react";
import Button from "../../UI/Button/Button";

const orderSummery = ({
  ingredients,
  price,
  purchaseCancelled,
  purchaseContinued,
}) => {
  const ingredientSummry = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummry}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        Continue
      </Button>
    </>
  );
};

export default orderSummery;
