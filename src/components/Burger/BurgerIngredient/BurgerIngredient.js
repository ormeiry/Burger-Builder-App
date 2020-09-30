import React from "react";
import PropType from "prop-types";
import {
  Meat,
  Cheese,
  Bacon,
  Salad,
  BreadTop,
  BreadBottom,
  Seeds1,
  Seeds2,
} from "./BurgerIngredient.module.css";

const BurgerIngredient = ({ type }) => {
  let ingredient = null;
  switch (type) {
    case "bread-bottom":
      ingredient = <div className={BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={BreadTop}>
          <div className={Seeds1}></div>
          <div className={Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={Salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropType.string.isRequired,
};

export default BurgerIngredient;
