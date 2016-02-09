# Risky UI

UI for viewing the risk profile of customers and unsettled bets.

It uses a separate [risk calculator](https://github.com/wenden-risk-analyser/risk-calculator) package to determine the risk profile of customers and bets, this is simply a UI implementation of this. The idea behind breaking this out was that the calculator could then be used for any other UI that needs to calculate risk profiles. Maybe a bit of overkill for this exercise in retrospect.

## Missing features
One glaring omission is the lack of connectivity with the _.csv_ betting data. You'll see that I've just mocked out the data into two simple JSON files. Time just got away from me and I made the decision to cut this feature. This was based partly on the directive I received to focus more on front end practices but in reality there was just no time to complete everything in the time I had.

Looking back there are probably a few things I would do differently, and the UI is quite bare bones! Nonetheless, enjoy.

## Usage
Pull down source code and run ```npm install``` to install dependencies.

To run the project from the command line run ```npm run start``` and head to http://localhost:4000/.

## Development
If any changes are required run ```npm run build``` after the changes which will recompile the code.

## Todo
* [ ] production webpack implementation
* [ ] immutable reducers
* [ ] build out proper prop types for components
* [ ] implement customer/bet services reading csv
* [ ] fix up prop definition after reducer combining
* [ ] cleanup url key and routing
* [ ] fix up push state warning message for routing
* [ ] filtering of data on the UI by customer/risk severity
* [ ] sass/less integration
