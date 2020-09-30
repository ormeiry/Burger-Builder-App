import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import { CheckoutSummery } from "./CheckoutSummery.module.css";

const checkoutSummery = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued,
}) => {
  return (
    <div className={CheckoutSummery}>
      <h1>Have Fun</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummery;
