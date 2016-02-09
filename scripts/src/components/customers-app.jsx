import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CustomerTable from './customer-table';
import BetTable from './bet-table';

class CustomerApp extends Component {
    render() {
        return (<div>
          <h1>Risky Customer Analyser</h1>
          <p></p>
          <CustomerTable customers={this.props.customers.customers} />
          <BetTable bets={this.props.bets.bets} />
        </div>);
    }
}

// will build this out when structure completely known
CustomerApp.propTypes = {
    customers: PropTypes.object,
    bets: PropTypes.object
};

function mapStateToProps(state) {
    return {
        customers: state.customers,
        bets: state.bets
    };
}

export default connect(mapStateToProps)(CustomerApp);
