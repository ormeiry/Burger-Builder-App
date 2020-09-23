import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

const App = () => {
  let routes = (
    <Switch>
      <Route path='/checkout' render={() => <Checkout />} />
      <Route path='/orders' component={() => <Orders />} />
      <Route path='/' exact component={BurgerBuilder} />
    </Switch>
  );
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default App;
