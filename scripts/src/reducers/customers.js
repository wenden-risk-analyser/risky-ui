import { RECEIVE_CUSTOMERS } from '../constants/action-types';

//
function customers(state = [], action) {
    switch (action.type) {
        case RECEIVE_CUSTOMERS: {
            return Object.assign({}, state, {
                customers: action.customers
            });
        }
        default: {
            return state;
        }
    }
}

export default customers;
