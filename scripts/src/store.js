import { createStore } from 'redux';
import customers from './reducers/customers';

export default createStore(customers);
