function getAll() {
    return [
        {
            customerId: '2',
            eventId: '1',
            participantId: '3',
            stake: 300,
            potentialPayout: 500,
            settled: true,
            payout: 500
        },
        {
            customerId: '2',
            eventId: '3',
            participantId: '5',
            stake: 300,
            potentialPayout: 500,
            settled: true,
            payout: 500
        },
        {
            customerId: '2',
            eventId: '2',
            participantId: '4',
            stake: 300,
            potentialPayout: 500,
            settled: true,
            payout: 0
        }
    ];
}

function search(query) {
    const bets = getAll();

    // really dumb search based off the query here.
    // need to come back and make this a lot smarter.
    return bets.filter(bet => bet.customerId === query.customerId && bet.settled === query.settled);
}

export default {
    getAll,
    search
};
