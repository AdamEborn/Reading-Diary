var redux = require('redux')
var thunk = require('redux-thunk').default;

//reducers go here
import {bookDisplayReducer, userReducer, mapReducer, searchTextReducer} from 'app/reducers/reducers';

export var configure = () => {
  var reducer = redux.combineReducers({
    bookDisplay: bookDisplayReducer,
    user: userReducer,
    map: mapReducer
  });

  //store
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f));

  return store;
}
