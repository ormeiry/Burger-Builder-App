import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";
import createInputField from "../createInputField/createInputField";

class ContactData extends Component {
  state = {
    orderForm: {
      name: createInputField("name", "input", "text", "Your Name"),
      street: createInputField("street", "input", "text", "Street"),
      zipCode: createInputField("zipCode", "input", "text", "Zip Code"),
      country: createInputField("country", "input", "text", "Country"),
      country: createInputField("email", "input", "text", "Your Email"),
      deliverMethod: createInputField("deliverMethod", "select"),
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    // testing connection to firebase
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => this.setState({ loading: false }));
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.if}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
          />
        ))}
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
