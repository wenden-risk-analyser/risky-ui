import React, { PropTypes } from 'react';

// stateless display of customer data
const CustomerTable = (props) => {
    const customers = props.customers;
    const custDisplay = customers.map(customer => (<tr key={'row-' + customer.id} className={customer.riskProfile.risk.toLowerCase()}>
        <td>{customer.id}</td>
        <td>{customer.numberOfBets}</td>
        <td>{customer.numberOfWins}</td>
        <td>{customer.riskProfile.risk}</td>
        <td>{customer.riskProfile.reason}</td>
      </tr>)
    );

    return (<table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Number of bets</th>
          <th>Number of wins</th>
          <th>Risk</th>
          <th>Risk description</th>
        </tr>
      </thead>
      <tbody>
        {custDisplay}
      </tbody>
    </table>);
};

// will build this out when structure completely known
CustomerTable.propTypes = {
    customers: PropTypes.array
};

export default CustomerTable;
