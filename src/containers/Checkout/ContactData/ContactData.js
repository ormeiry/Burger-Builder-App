import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import createInputField from '../createInputField/createInputField';
import withErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../../store/actions/index';

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: createInputField('name', 'input', 'text', 'Your Name'),
    street: createInputField('street', 'input', 'text', 'Street'),
    zipCode: createInputField('zipCode', 'input', 'text', 'Zip Code'),
    country: createInputField('country', 'input', 'text', 'Country'),
    email: createInputField('email', 'input', 'email', 'Your Email'),
    deliverMethod: createInputField('deliverMethod', 'select'),
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const orderHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let formElementI in orderForm) {
      formData[formElementI] = orderForm[formElementI].value;
    }
    const order = {
      ingredients: props.ings,
      price: props.price,
      orderData: formData,
    };

    props.onOrderBurger(order);
  };

  const checkValidity = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== '';
    }

    return isValid;
  };

  const inputChangedHandler = (e, inpuIdentifier) => {
    const updatedOrderForm = {
      ...orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inpuIdentifier],
    };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inpuIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputI in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputI].valid && formIsValid;
    }

    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  };

  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }
  let form = (
    <form onSubmit={orderHandler}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          shouldValidate={formElement.config.validation}
          invalid={!formElement.config.valid}
          touched={formElement.config.touched}
          changed={(e) => inputChangedHandler(e, formElement.id)}
        />
      ))}
      <Button btnType='Success' disabled={!formIsValid}>
        Order
      </Button>
    </form>
  );

  if (props.loading) {
    form = <Spinner />;
  }
  return (
    <div className={classes.ContactData}>
      <h4>Enter Your Contact Data</h4>
      {form}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
