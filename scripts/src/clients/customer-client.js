/*
 * Customer service for retrieving customer data.
 *
 * TODO: Get from provided csv file
 */
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

export default customerService();
