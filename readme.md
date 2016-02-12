# Risky UI

UI for viewing the risk profile of customers and unsettled bets.

## Missing features
* There is no caching of the _csv_ data. Just ran out of time, would have been nice to have it though. Not even a lock which is crap.
* Hardly any tests at the moment. Again a time restraint.
* No proper routing story. Again a time restraint, would need to break out the _app.jsx_ file into two different files to run based off the route. Or introduce _react-router_ or some other similar implementation.

## Usage
Pull down source code and run ```npm install``` to install dependencies. I've included nuget packages in the source repository.

To run the project you will first need to run ```npm run build``` and simply run from within Visual Studio (f5).

## Development
If any changes are required run ```npm run build``` after the changes which will recompile the code.

## Todo
* [ ] more tests!
* [ ] caching
* [ ] production webpack implementation
* [ ] immutable reducers
* [ ] build out proper prop types for components
* [ ] add url routing
* [ ] filtering of data on the UI by customer/risk severity
* [ ] sass/less integration
* [ ] better UI
