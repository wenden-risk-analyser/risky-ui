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

// customer service
export default {
    getAll: getCustomers,
    getById() {}
};
