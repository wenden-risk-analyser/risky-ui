import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CustomerTable from './customer-table';

const CustomerApp = (props) => {
    const customers = props.customerService.customers || [];
    return (<div>
        <h2>Risky Customer Analyser</h2>
        <CustomerTable customers={customers} />
    </div>);
};

CustomerApp.propTypes = {
    customerService: PropTypes.shape({
        customers: React.PropTypes.array
    })
};

function mapStateToProps(state) {
    return {
        customerService: state.customerService
    };
}

export default connect(mapStateToProps)(CustomerApp);
