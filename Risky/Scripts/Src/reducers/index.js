import { combineReducers } from 'redux';
import betService from './bets';
import customerService from './customers';

export default combineReducers({
    betService,
    customerService
});
