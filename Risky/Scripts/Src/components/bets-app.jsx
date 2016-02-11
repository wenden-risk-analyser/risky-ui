import React, { Component } from 'react';
import { connect } from 'react-redux';
import BetTable from './bet-table';

class BetsApp extends Component {
    render() {
        const bets = this.props.bets.bets || [];
        return (<div>
            <h2>Risky Bets Analyser</h2>
            <BetTable bets={bets} />
          </div>);
    }
}

function mapStateToProps(state) {
    return {
        customers: state.customers,
        bets: state.bets
    };
}

export default connect(mapStateToProps)(BetsApp);
