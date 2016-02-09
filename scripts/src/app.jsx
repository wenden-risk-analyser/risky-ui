import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getAllCustomers, getAllBets } from './actions';
import CustomerApp from './components/customers-app';

// load up the customers and bets
store.dispatch(getAllCustomers());
store.dispatch(getAllBets());

render(
  <Provider store={store}>
    <CustomerApp />
  </Provider>,
  document.getElementById('content')
);
