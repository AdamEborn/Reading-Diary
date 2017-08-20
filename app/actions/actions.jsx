import axios from 'axios';

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

// //example async actions
export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
}
export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url: url
  }
}
export var fetchLocation = () => {
  return(dispatch, getState) => {
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function (res) {
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q='
      dispatch(completeLocationFetch(baseUrl + loc))
    })
  }
}


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

export var setSearchText = (searchTerm) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchTerm
  };
};

export var addBook = (bookToSave) => {
  return {
    type: 'ADD_BOOK',
    bookToSave
  };
};

export var removeBook = (obj) => {
  return {
    type: 'REMOVE_BOOK',
    name: obj.name
  };
};
