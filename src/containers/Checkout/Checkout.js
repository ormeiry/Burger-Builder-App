import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  let summery = <Redirect to='/' />;

  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null;
    summery = (
      <div>
        {purchasedRedirect}
        <CheckoutSummery
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    );
  }
  return summery;
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
