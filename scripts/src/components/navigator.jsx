import React from 'react';
import { Link } from 'react-router';

// stateless display of customer data
function Navigator() {
    // simple link display
    return (<p className="navigator">
        <Link to="/">Home</Link>
        <Link to="/risky-bets">Bets</Link>
    </p>);
}

export default Navigator;
