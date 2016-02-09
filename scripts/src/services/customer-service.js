import betService from './bet-service';

/*
 * Customer service for retrieving customer data.
 *
 * TODO: Get from provided csv file. This is a dirty, dirty hack
 */
function getCustomers() {
    const customers = [];
    betService.getAll().forEach(bet => {
        if (customers.filter(customer => customer.id === bet.customerId).length === 0) {
            customers.push({ id: bet.customerId });
        }
    });

    return customers;
}

// customer service
export default {
    getAll: getCustomers,
    getById() {}
};
