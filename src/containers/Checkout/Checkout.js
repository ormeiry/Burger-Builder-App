import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import ContactData from './ContactData/ContactData';

const Checkout = ({ history, ings, purchased, match }) => {
  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  const checkoutContinuedHandler = () => {
    history.replace('/checkout/contact-data');
  };

  let summery = <Redirect to='/' />;

  if (ings) {
    const purchasedRedirect = purchased ? <Redirect to='/' /> : null;
    summery = (
      <div>
        {purchasedRedirect}
        <CheckoutSummery
          ingredients={ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
        <Route path={match.path + '/contact-data'} component={ContactData} />
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
