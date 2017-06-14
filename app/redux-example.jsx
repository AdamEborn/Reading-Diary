var redux = require('redux');

console.log("starting redux");

//state defaults object to pass into reducer
var searchResultDefaults = [];
var wishlistDefaults = [];

//counter variable to increment with each addition to a particular array
var nextBookId = 1;

var oldreducer = (state = stateDefaults, action) => {
	switch(action.type) {
		case 'SEARCH_REQUEST':
			return {
				...state,
				searchResults: action.results
			};
			case 'ADD_BOOK':
				return {
					//...state gets current state
					...state,
					//adds current wishlist array content and adds to end of it
					
				};
				case 'REMOVE_BOOK':
					return {
						...state,
						wishlist: state.wishlist.filter(function(book) {
							return book.id !== action.id
						})
					}

			default:
				return state;
	}
}

//multiple reducers
var wishlistReducer = (state = wishlistDefaults, action) => {
	switch(action.type) {
		case 'ADD_BOOK':
			return [
				...state,{
				id:nextBookId++,
				bookName: action.name,
				bookAuthor: action.author}
			]
		}	//mutliple reducers 07.04
};

var searchResultReducer = (state = searchResultDefaults, action) => {
		switch(action.type) {
		case 'SEARCH_REQUEST':
			return action.results
		default:
			return state;
	}
};

//main reducer to register the multiple reducers
var reducer = redux.combineReducers({
	searches: searchResultReducer,
	wishlist: wishlistReducer
})





//create a store which represents state of whole app
var store = redux.createStore(reducer, redux.compose(
	//checks if dev tools is working
	window.devToolsExtension ? window.devToolsExtension() : (f) => {
		return f;
	}
))

//get current state and log it
var currentState = store.getState();
console.log(currentState)


//use actions to change state 
var action = {
	type: 'SEARCH_REQUEST',
	results: ['Book1', 'Book2', 'Book3']
}

//'dispatch' actions to change state
store.dispatch(action);
console.log(store.getState());

//subscribe method to listen for state change
store.subscribe(() => {
	//fetch current state
	var state = store.getState();
	console.log("subscribed state is ", state)

})

//second search request action
store.dispatch({
	type: 'SEARCH_REQUEST',
	results: ['Book1', 'Book2', 'Book3', 'Book4']

})

//add an individual book to array - ?use for wishlist?
store.dispatch({
	type: 'ADD_BOOK',
	name: 'The Chalk Pit',
	author: 'Elly Griffiths'
})

store.dispatch({
	type: 'ADD_BOOK',
	name: 'Three Men In A Boat',
	author: 'Jerome K. Jerome'
})


//remove book from array
store.dispatch({
	type: 'REMOVE_BOOK',
	id: 1
})