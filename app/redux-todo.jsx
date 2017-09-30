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


var searchTextAction = {
  type:'CHANGE_TEXT',
  searchText: 'blah blah blah'
}
store.dispatch(searchTextAction)
