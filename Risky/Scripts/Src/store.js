import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';

export default createStore(reducers, applyMiddleware(thunkMiddleware));
