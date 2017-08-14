var redux = require('redux');
var axios = require('axios');
var bookActions = require('app/components/SearchDisplay/actions');
var store = require('./store/configureStore').configure();
console.log('Starting redux example');

//user reducer & action generators
//--------------------------------
// var userReducer = (state = 'adam', action) => {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return action.name;
//     default:
//       return state;
//   };
// };
//
// var changeName = (name) => {
//   return {
//     type: 'CHANGE_NAME',
//     name: name
//   }
// }


//example async reducer
// var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
//   switch (action.type) {
//     case 'START_LOCATION_FETCH':
//       return {
//         isFetching: true,
//         url: undefined
//       }
//     case 'COMPLETE_LOCATION_FETCH':
//       return {
//         isFetching: false,
//         url: action.url
//       }
//     default:
//     return state;
//   }
// }
//
// //example async actions
// var startLocationFetch = () => {
//   return {
//     type: 'START_LOCATION_FETCH'
//   }
// }
// var completeLocationFetch = (url) => {
//   return {
//     type: 'COMPLETE_LOCATION_FETCH',
//     url: url
//   }
// }
// var fetchLocation = () => {
//   return(dispatch, getState) => {
//     dispatch(startLocationFetch());
//     axios.get('http://ipinfo.io').then(function (res) {
//       var loc = res.data.loc;
//       var baseUrl = 'http://maps.google.com?q='
//       dispatch(completeLocationFetch(baseUrl + loc))
//     })
//   }
// }


//subscribe method called when state changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New State', state)
  // if (state.map.isFetching) {
  //   console.log('getting location')
  // }
  // else if (state.map.url) {
  //   console.log('<a href=" ' + state.map.url + ' " target="_blank">View your location</a>') ;
  // }
})

var bookA = {
  name: 'a dance with dragons',
  author: 'george r. r. martin',
  category: 'fantasy'
}
var bookB = {
  name: 'the chalk pit',
  author: 'elly griffiths',
  category: 'crime'
}
var bookC = {
  name: 'a touch of frost',
  author: 'r.d wingfield',
  category: 'crime'
}
var bookD = {
  name: 'the remorseful day',
  author: 'colin dexter',
  category: 'crime'
}

//actions
store.dispatch(bookActions.addBook(bookB))
store.dispatch(bookActions.addBook(bookC))
store.dispatch(bookActions.addBook(bookD))
store.dispatch(bookActions.removeBook('the remorseful day'))
store.dispatch(bookActions.addBook(bookA))
store.dispatch(bookActions.removeBook('a dance with dragons'))

//API
//store.dispatch(fetchLocation());
