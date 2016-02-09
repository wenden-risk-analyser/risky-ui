import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getAllCustomers } from './actions';
import CustomerApp from './components/customers-app';

// load up the customers
store.dispatch(getAllCustomers());

render(
  <Provider store={store}>
    <CustomerApp />
  </Provider>,
  document.getElementById('content')
);
