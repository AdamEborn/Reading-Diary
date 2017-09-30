import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import $ from "jquery";
import Main from 'Main';
var {Provider} = require('react-redux');
import './../firebase/index';
var store = require('./store/configureStore').configure();
var actions = require('./actions/index');
//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//require('style!css!sass!applicationStyles')
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("State:", state);
});

store.dispatch(actions.changeName('Adam'))
store.dispatch(actions.changeName('Eric'));
store.dispatch(actions.changeName('Jim'));
store.dispatch(actions.changeName('Fred'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Star Wars', 'Sci-Fi'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.removeMovie(1));

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Main />
		</HashRouter>
	</Provider>,
  document.getElementById('app')
)


//require('./redux-todo.jsx');




//todo
//user account -
//(if this.state.user === "") {
//only show user select component in nav bars
//}
//else {show everything else}


//will need account settings page
//if (this.state.user !== "") {
//show setiings
//}
