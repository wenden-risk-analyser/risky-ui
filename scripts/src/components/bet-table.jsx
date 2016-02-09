import React, { PropTypes } from 'react';

// crude uniqueKey generator for each bet row
function uniqueKeyGenerator(bet) {
    return 'row-' + bet.customerId + bet.eventId + bet.participantId;
}

// stateless display of bet data
const BetTable = (props) => {
    const bets = props.bets;
    const betDisplay = bets.map(bet => (<tr key={uniqueKeyGenerator(bet)}>
        <td>{bet.customerId}</td>
        <td>{bet.riskProfile.risk}</td>
        <td>{bet.riskProfile.reason}</td>
      </tr>)
    );

    return (<table>
      <thead>
        <tr>
          <td>Bet</td>
          <td>Risk</td>
          <td>Risk description</td>
        </tr>
      </thead>
      <tbody>
        {betDisplay}
      </tbody>
    </table>);
};

// will build this out when structure completely known
BetTable.propTypes = {
    bets: PropTypes.array
};

export default BetTable;
