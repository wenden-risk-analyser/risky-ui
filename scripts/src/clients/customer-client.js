import betClient from './bet-client';
import riskCalculator from 'risk-calculator';

/*
 * Customer service for retrieving customer data.
 *
 * TODO: Get from provided csv file
 */
function getCustomers() {
    return [
        {
            id: '2'
        },
        {
            id: '3'
        }
    ];
}

// internal customer service
const customerServiceInt = {
    getAll: getCustomers,
    getById() {}
};

// bootstrap risk calculator
const calc = riskCalculator(customerServiceInt, betClient);

/*
* @Public
*
* Get all customers including their risk profile
*
* @returns {Array} List of customers.
*
*/
function getAll() {
    return customerServiceInt.getAll().map(customer => {
        const settledBets = betClient.search({ customerId: customer.id, settled: true });

        customer.riskProfile = calc.customerRiskProfile(customer.id);
        customer.numberOfBets = settledBets.length;
        customer.numberOfWins = settledBets.filter(bet => bet.payout > 0).length;
        return customer;
    });
}

export default {
    getAll
};
