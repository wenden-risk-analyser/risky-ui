import settled from '../../_mockSettledBets';
import unsettled from '../../_mockUnsettledBets';

/*
 * Bet service for retrieving customer data.
 *
 * TODO: Get from provided csv file. This is a dirty, dirty hack
 */
function getBets() {
    const settledFormatted = settled.map(bet => {
        bet.settled = true;
        bet.potentialPayout = bet.payout;

        return bet;
    });

    const unsettledFormatted = unsettled.map(bet => {
        bet.settled = false;

        return bet;
    });

    return settledFormatted.concat(unsettledFormatted);
}

function search(query) {
    const bets = getBets();

    // really dumb search based off the query here.
    // need to come back and make this a lot smarter.
    return bets.filter(bet => bet.customerId === query.customerId && bet.settled === query.settled);
}

// internal bet service
export default {
    getAll: getBets,
    search
};
