import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CustomerTable from './customer-table';
import Navigator from './navigator';

class CustomerApp extends Component {
    render() {
        return (<div>
          <h1>Risky Customer Analyser</h1>
          <Navigator />
          <CustomerTable customers={this.props.customers.customers} />
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
