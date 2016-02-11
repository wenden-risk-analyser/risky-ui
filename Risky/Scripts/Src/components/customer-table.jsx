import React, { PropTypes } from 'react';
import friendlyRisk from '../utilities/friendly-risk';

// stateless display of customer data
const CustomerTable = (props) => {
    const customers = props.customers;
    const custDisplay = customers.map(customer => (<tr key={'row-' + customer.Id} className={'risk-' + customer.RiskProfile.Risk}>
        <td>{customer.Id}</td>
        <td>{friendlyRisk(customer.RiskProfile.Risk)}</td>
        <td>{customer.RiskProfile.Reason}</td>
      </tr>)
    );

    return (<table>
      <thead>
        <tr>
          <th>Customer</th>
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
