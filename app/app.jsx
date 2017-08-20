import React from 'react';
import ReactDOM from 'react-dom';

import ReadingDiaryApp from 'ReadingDiaryApp';

import './../firebase/index';

//redux bits
var actions = require('actions');
var store = require('configureStore').configure();
store.subscribe(() => {
	console.log('New state', store.getState());
});

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

store.dispatch(actions.addBook(bookA))
store.dispatch(actions.addBook(bookB))
store.dispatch(actions.addBook(bookC))
store.dispatch(actions.addBook(bookD))
store.dispatch(actions.removeBook(bookA))


ReactDOM.render(
	<ReadingDiaryApp/>,
  document.getElementById('app')
);

//todo
//user account -
//(if this.state.user === "") {
//only show user select component in nav bar
//}
//else {show everything else}


//will need account settings page
//if (this.state.user !== "") {
//show setiings
//}
