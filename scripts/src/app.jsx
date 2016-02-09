import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getAllCustomers, getAllBets } from './actions';
import CustomerApp from './components/customers-app';
import BetsApp from './components/bets-app';
import { Router, Route, browserHistory } from 'react-router';

// load up the customers and bets
store.dispatch(getAllCustomers());
store.dispatch(getAllBets());

render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={CustomerApp} />
        <Route path="/risky-bets" component={BetsApp} />
      </Router>
  </Provider>,
  document.getElementById('content')
);
