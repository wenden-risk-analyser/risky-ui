import React, { PropTypes } from 'react';
import friendlyRisk from '../utilities/friendly-risk';

// crude uniqueKey generator for each bet row
function uniqueKeyGenerator(bet) {
    return 'row-' + bet.CustomerId + bet.EventId + bet.ParticipantId;
}

// stateless display of bet data
const BetTable = (props) => {
    const bets = props.bets;
    const betDisplay = bets.map(bet => (<tr key={uniqueKeyGenerator(bet)} className={'risk-' + bet.RiskProfile.Risk}>
        <td>{bet.CustomerId}</td>
        <td>{bet.Stake}</td>
        <td>{bet.PotentialPayout}</td>
        <td>{friendlyRisk(bet.RiskProfile.Risk)}</td>
        <td>{bet.RiskProfile.Reason}</td>
      </tr>)
    );

    return (<table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Stake</th>
          <th>Potential Payout</th>
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
