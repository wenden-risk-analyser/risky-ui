import * as actionTypes from '../constants/action-types';

// will become customer service used to retrieve the customer data
const customerService = function () {
    function getCustomers() {
        return [];
    }

    return {
        getCustomers
    };
};

export function getAllCustomers() {
    return {
        type: actionTypes.RECEIVE_CUSTOMERS,
        customers: customerService().getCustomers()
    };
}
