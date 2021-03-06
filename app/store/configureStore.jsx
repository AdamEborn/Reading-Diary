var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbyReducer, moviesReducer, mapReducer, wishListReducer} = require('./../reducers/index');



export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer,
    movies: moviesReducer,
    map: mapReducer,
    wishList: wishListReducer
  });

  //STORE & SUBSCRIBE
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
