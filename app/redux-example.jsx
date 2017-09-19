var redux = require('redux');
var axios = require('axios');
console.log("Starting redux example");



//REDUCERS
var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
    }
};
var hobbyReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id)
      default:
        return state;
  }
};
var moviesReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_MOVIE':
        return [
          ...state,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        case 'REMOVE_MOVIE':
          return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
}
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      }
    default:
      return state;
  }
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbyReducer,
  movies: moviesReducer,
  map: mapReducer
});

//STORE & SUBSCRIBE
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("State:", state);
});


//ACTIONS
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};


//ASYNC ACTIONS
var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

var fetchLocation = () => {
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function (response) {
    var loc = response.data.loc;
    var baseUrl = 'http://maps.google.com?q='
    store.dispatch(completeLocationFetch(baseUrl + loc));
  });
};
fetchLocation();
store.dispatch(changeName('Adam'))
store.dispatch(changeName('Eric'));
store.dispatch(changeName('Jim'));
store.dispatch(changeName('Fred'));
store.dispatch(addHobby('Walking'));
store.dispatch(addMovie('Mad Max', 'Action'));
store.dispatch(addMovie('Star Wars', 'Sci-Fi'));
store.dispatch(addHobby('Running'));
store.dispatch(removeHobby(2));
store.dispatch(removeMovie(1));
