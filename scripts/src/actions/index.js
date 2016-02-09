import * as actionTypes from '../constants/action-types';
import * as dataClient from '../clients/data-client';

export function getAllCustomers() {
    return {
        type: actionTypes.RECEIVE_CUSTOMERS,
        customers: dataClient.getAllCustomers()
    };
}

export function getAllBets() {
    return {
        type: actionTypes.RECEIVE_BETS,
        bets: dataClient.getAllBets()
    };
}
