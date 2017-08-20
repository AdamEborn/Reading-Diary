const uuid = require('uuid');


// user reducer & action generators
// --------------------------------
export var userReducer = (state = 'adam', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

//example async reducer
//---------------------
export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      }
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      }
    default:
    return state;
  }
}


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
    return action.searchTerm;
  default:
    return state;
  };
};

export var bookDisplayReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
    return [
        ...state,
        action.bookToSave
      ];
    case 'REMOVE_BOOK':
    return state.filter((book) => {
      return book.name !== action.name
    })
    default:
      return state;
  };
};
