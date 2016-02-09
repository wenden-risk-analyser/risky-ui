import customerService from '../services/customer-service';
import betService from '../services/bet-service';
import riskCalculator from 'risk-calculator';

// bootstrap risk calculator
const calc = riskCalculator(customerService, betService);

/*
* @Public
*
* Get all customers including their risk profile
*
* @returns {Array} List of customers.
*
*/
export function getAllCustomers() {
    return customerService.getAll().map(customer => {
        const settledBets = betService.search({ customerId: customer.id, settled: true });

        customer.riskProfile = calc.customerRiskProfile(customer.id);
        customer.numberOfBets = settledBets.length;
        customer.numberOfWins = settledBets.filter(bet => bet.payout > 0).length;
        return customer;
    });
}

/*
* @Public
*
* Get all bets including their risk profile
*
* @returns {Array} List of bets.
*
*/
export function getAllBets() {
    return betService.getAll().map(bet => {
        bet.riskProfile = calc.betRiskProfile(bet);

        return bet;
    });
}
