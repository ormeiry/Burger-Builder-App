import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = ({ onFetchOrders, orders, loading }) => {
  useEffect(() => {
    onFetchOrders();
    // eslint-disable-next-line
  }, []);

  let ordersList = <Spinner />;
  if (!loading) {
    ordersList = orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={+order.price}
      />
    ));
  }
  return <div>{ordersList}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
