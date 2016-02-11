export default (riskValue) => {
    switch (riskValue) {
        case 0:
            return 'Safe';
        case 1:
            return 'Unusual';
        case 2:
            return 'Risky';
        case 3:
            return 'Highly Risky';
        default:
            return '';
    }
};
