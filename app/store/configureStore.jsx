var redux = require('redux')
var thunk = require('redux-thunk').default;

import {bookDisplayReducer} from 'app/components/SearchDisplay/reducer';

export var configure = () => {
  var reducer = redux.combineReducers({
    bookDisplay: bookDisplayReducer,
  });

  //store
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f));

  return store;
}
