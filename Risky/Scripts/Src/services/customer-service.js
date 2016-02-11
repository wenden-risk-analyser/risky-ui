import qwest from 'qwest';

/*
 * Customer service for retrieving customer data.
 *
 */
function getCustomers() {
    return qwest.get('api/customers/')
        .then((xhr, response) => response);
}

// customer service
export default {
    getAll: getCustomers
};
