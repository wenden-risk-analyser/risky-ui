import React, { PropTypes } from 'react';

// stateless display of customer data
const CustomerTable = (props) => {
    const customers = props.customers;
    const custDisplay = customers.map(customer => (<tr key={'row-' + customer.id}>
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
          <td>Customer</td>
          <td>Number of bets</td>
          <td>Number of wins</td>
          <td>Risk</td>
          <td>Risk description</td>
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
