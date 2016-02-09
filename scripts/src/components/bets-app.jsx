import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BetTable from './bet-table';
import Navigator from './navigator';

class BetsApp extends Component {
    render() {
        return (<div>
          <h1>Risky Bets Analyser</h1>
          <Navigator />
          <BetTable bets={this.props.bets.bets} />
        </div>);
    }
}

// will build this out when structure completely known
BetsApp.propTypes = {
    customers: PropTypes.object,
    bets: PropTypes.object
};

function mapStateToProps(state) {
    return {
        customers: state.customers,
        bets: state.bets
    };
}

export default connect(mapStateToProps)(BetsApp);
