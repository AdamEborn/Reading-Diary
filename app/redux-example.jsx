var redux = require('redux');
var actions = require('app/actions/actions');
var store = require('./store/configureStore').configure();
console.log('Starting redux example');


//subscribe method called when state changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New State', state)
  if (state.map.isFetching) {
    console.log('getting location')
  }
  else if (state.map.url) {
    console.log('<a href=" ' + state.map.url + ' " target="_blank">View your location</a>') ;
  }
})


//API
store.dispatch(actions.fetchLocation());
