var axios = require('axios');


//ACTIONS
export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

//ASYNC ACTIONS
// export var startLocationFetch = () => {
//   return {
//     type: 'START_LOCATION_FETCH'
//   }
// };
//
// export var completeLocationFetch = (url) => {
//   return {
//     type: 'COMPLETE_LOCATION_FETCH',
//     url
//   }
// }
//
export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function (response) {
      var loc = response.data.loc;
      var baseUrl = 'http://maps.google.com?q='
      dispatch(completeLocationFetch(baseUrl + loc));
    });
  }
};

export var startWishlistFetch = () => {
  return {
    type: 'START_WISHLIST_FETCH'
  }
};

export var completeWishlistFetch = (data) => {
  return {
    type: 'COMPLETE_WISHLIST_FETCH',
    data
  }
}

export var fetchWishlist = () => {
  return (dispatch, getState) => {
    dispatch(startWishlistFetch())
     firebase.database().ref().child('wishlist').once('value').then(function (snapshot) {
      var data = snapshot.val();
      dispatch(completeWishlistFetch(data))
    })
  }
};
