import React from 'react';
import { connect } from 'react-redux';

class CustomerApp extends React.Component {
    render() {
        return <div>Hello, there are {this.props.customers.length} customers.</div>;
    }
}

// will build
CustomerApp.propTypes = {
    customers: React.PropTypes.array
};

function mapStateToProps(state) {
    return {
        customers: state.customers
    };
}

export default connect(mapStateToProps)(CustomerApp);
