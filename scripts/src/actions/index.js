import * as actionTypes from '../constants/action-types';

// will become customer service used to retrieve the customer data
const customerService = function () {
    function getCustomers() {
        return [
            {
                id: '1',
                numberOfBets: 1000,
                numberOfWins: 300,
                totalOutlay: 9999,
                totalPayout: 7000,
                riskProfile: {
                    risk: 'safe',
                    reason: ''
                }
            },
            {
                id: '3',
                numberOfBets: 400,
                numberOfWins: 300,
                totalOutlay: 9999,
                totalPayout: 17000,
                riskProfile: {
                    risk: 'risky',
                    reason: 'large win percentage'
                }
            }
        ];
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
