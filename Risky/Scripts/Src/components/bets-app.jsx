import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BetTable from './bet-table';

const BetsApp = (props) => {
    const bets = props.betService.bets || [];
    return (<div>
        <h2>Risky Bets Analyser</h2>
        <BetTable bets={bets} />
      </div>);
};

BetsApp.propTypes = {
    betService: PropTypes.shape({
        bets: React.PropTypes.array
    })
};

function mapStateToProps(state) {
    return {
        betService: state.betService
    };
}

export default connect(mapStateToProps)(BetsApp);
