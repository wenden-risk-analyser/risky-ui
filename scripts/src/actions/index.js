import * as actionTypes from '../constants/action-types';
import customerService from '../clients/customer-client';

export function getAllCustomers() {
    return {
        type: actionTypes.RECEIVE_CUSTOMERS,
        customers: customerService.getCustomers()
    };
}
