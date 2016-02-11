import qwest from 'qwest';

/*
 * Bet service for retrieving customer data.
 */
function getBets() {
    return qwest.get('api/bets/unsettled')
        .then((xhr, response) => response);
}

// internal bet service
export default {
    getAll: getBets
};
