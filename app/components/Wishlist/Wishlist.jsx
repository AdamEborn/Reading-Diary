import React from 'react';
import SearchDisplay from 'SearchDisplay';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


class Wishlist extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			dataForRender: []
		}
	}

componentWillMount() {
	return firebase.database().ref().child('wishlist').once('value').then(function (snapshot) {
var data = snapshot.val();
var arr = []
Object.keys(data).forEach(key => {
	if (data[key] && typeof data[key] === "object") {
		var book = {
			bookTitle: data[key].bookTitle,
			author: data[key].author,
			bookDescription: data[key].bookDescription,
			link: data[key].link
		}
	}
	arr.push(book)
})
console.log(arr)
this.setState({
	dataForRender: arr
})
}.bind(this));

console.log(this.state.dataForRender)
}

	render() {

		return (
			<div>

			<SearchDisplay content={this.state.dataForRender}/>
			</div>
			)
	}
}

export default Wishlist;
