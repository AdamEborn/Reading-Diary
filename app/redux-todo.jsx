var redux = require('redux');
console.log("Starting redux example");

//STATE DEFAULT
var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

//REDUCERS
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        searchText: action.searchText
    }
    default:
    return state;
  }
};



var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("State:", state);
})


var searchTextAction = {
  type:'CHANGE_TEXT',
  searchText: 'blah blah blah'
}
store.dispatch(searchTextAction)
