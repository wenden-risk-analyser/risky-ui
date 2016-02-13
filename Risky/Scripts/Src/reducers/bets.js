import { RECEIVE_BETS } from '../constants/action-types';

// bet reducer
function bets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_BETS: {
            return Object.assign({}, state, {
                bets: action.bets
            });
        }
        default: {
            return state;
        }
    }
}

export default bets;
