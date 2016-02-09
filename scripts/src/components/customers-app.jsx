import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CustomerTable from './customer-table';

class CustomerApp extends Component {
    render() {
        return (<div>
          <h1>Risky Customer Analyser</h1>
          <p></p>
          <CustomerTable customers={this.props.customers} />
        </div>);
    }
}

// will build this out when structure completely known
CustomerApp.propTypes = {
    customers: PropTypes.array
};

function mapStateToProps(state) {
    return {
        customers: state.customers
    };
}

export default connect(mapStateToProps)(CustomerApp);
