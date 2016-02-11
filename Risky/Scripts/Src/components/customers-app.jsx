import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerTable from './customer-table';

class CustomerApp extends Component {
    render() {
        const customers = this.props.customers.customers || [];
        return (<div>
          <h2>Risky Customer Analyser</h2>
          <CustomerTable customers={customers} />
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        customers: state.customers,
        bets: state.bets
    };
}

export default connect(mapStateToProps)(CustomerApp);
