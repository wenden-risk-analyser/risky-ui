import React, { PropTypes } from 'react';

// crude uniqueKey generator for each bet row
function uniqueKeyGenerator(bet) {
    return 'row-' + bet.customerId + bet.eventId + bet.participantId;
}

// stateless display of bet data
const BetTable = (props) => {
    const bets = props.bets;
    const betDisplay = bets.map(bet => (<tr key={uniqueKeyGenerator(bet)} className={bet.riskProfile.risk.toLowerCase()}>
        <td>{bet.customerId}</td>
        <td>{bet.riskProfile.risk}</td>
        <td>{bet.riskProfile.reason}</td>
      </tr>)
    );

    return (<table>
      <thead>
        <tr>
          <th>Bet</th>
          <th>Risk</th>
          <th>Risk description</th>
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
