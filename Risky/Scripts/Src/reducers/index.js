import { combineReducers } from 'redux';
import bets from './bets';
import customers from './customers';

export default combineReducers({
    customers,
    bets
});
