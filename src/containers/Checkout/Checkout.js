import React, { Component } from "react";
import CheckoutSummery from "../../components/Order/CheckoutSummery/CheckoutSummery";

class Checkout extends Component {
  state = {
    ingrediens: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  render() {
    return (
      <div>
        <CheckoutSummery ingredients={this.state.ingrediens} />
      </div>
    );
  }
}

export default Checkout;
