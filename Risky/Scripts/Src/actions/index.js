import * as actionTypes from '../constants/action-types';
import customerService from '../services/customer-service';
import betService from '../services/bet-service';

function receiveCustomers(customers) {
    return {
        type: actionTypes.RECEIVE_CUSTOMERS,
        customers
    };
}

export function getAllCustomers() {
    return dispatch => {
        customerService.getAll()
        .then(customers => dispatch(receiveCustomers(customers)));
    };
}

function receiveBets(bets) {
    return {
        type: actionTypes.RECEIVE_BETS,
        bets
    };
}

export function getAllBets() {
    return dispatch => {
        betService.getAll()
        .then(bets => dispatch(receiveBets(bets)));
    };
}
