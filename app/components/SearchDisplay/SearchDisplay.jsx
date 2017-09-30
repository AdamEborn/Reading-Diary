import React from 'react';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

import SearchForm from 'SearchForm';
import dataFunc from 'firebase/databaseFunctions';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wishlistUrls: [],
			data: this.props.content
		}
	};

	componentWillMount() {
	return firebase.database().ref().child('wishlist').once('value').then(function (snapshot) {
		var data = snapshot.val();
		if (data === null) {
			return
		}
		var arr = []
		Object.keys(data).forEach(key => {
			if (data[key] && typeof data[key] === "object") {
				arr.push(data[key].link)
			}
		})
		console.log(arr)
		this.setState({
			wishlistUrls: arr
		})
	}.bind(this));

}

	saveBookToWishlist(bookToSave) {
		var reference = firebase.database().ref().child('wishlist');
		var savedBook = {
			id: 'tempstring',
			bookTitle: bookToSave.bookTitle,
			author: bookToSave.author,
			bookDescription: bookToSave.bookDescription,
			link: bookToSave.link,
			thumbnail: bookToSave.thumbnail
		}
		var newPushRef = reference.push(savedBook);
		reference.child(newPushRef.key).update({
			id: newPushRef.key
		});
	};

	removeBookFromWishlist(bookToRemove) {
		var ref = firebase.database().ref().child('wishlist');
		ref.on("value", function(snapshot) {
			var sv = snapshot.val();
			for (var key in sv) {
				if (!sv.hasOwnProperty(key)) continue;
				var obj = sv[key];
				if (obj.hasOwnProperty("id") && obj.id === bookToRemove.id) {
					ref.child(obj.id).remove();
				};
			};
		});
	};


	render() {
		switch (this.props.mode) {
				case 'searchRes':
					var displayData = this.props.content.map(function(book, index) {
						return (
							<div key={index}>
								<br />
								<table>
									<tbody>
										<tr>
											<td rowSpan="4"> <img src={book.thumbnail}/> </td>
											<td colSpan="3">{book.bookTitle}</td>
										</tr>
										<tr>
											<td colSpan="3"> <span>By </span>{book.author}</td>
										</tr>
										<tr>
											<td> <span>Published in:</span> {book.publishedDate} </td>
										</tr>
										<tr>
											<td> <a href={book.link} target="_blank">Read More...</a></td>
											<td> <span onClick={this.saveBookToWishlist.bind(this, book)}>Add To Wishlist</span></td>
											<td> <span>Add to Read List</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						)
					}, this)
					break;

					case 'wish':
						var displayData = this.props.content.map(function(book, index) {
						return (
							<div key={index}>
							<br/>
							<table>
							<tbody>
								<tr>
									<td rowSpan="4"><img src={book.thumbnail}/></td>
									<td colSpan="3" onClick={this.revealModal}>{book.bookTitle}</td>
								</tr>
								<tr>
									<td colSpan="3"> <span>By </span>{book.author}</td>
								</tr>
								<tr>
									<td> <span>Published in:</span> {book.publishedDate} </td>
								</tr>
								<tr>
									<td> <a href={book.link} target="_blank">Read More...</a></td>
									<td> <span onClick={this.removeBookFromWishlist.bind(this, book)}>Remove From Wishlist</span></td>
									<td> <span>Add to Read List</span></td>
								</tr>
								</tbody>
							</table>
							<br/>
						</div>
							)
					}, this)
				default:
			}

			return (
			<div>
				{displayData}
			</div>)
	};
}

export default SearchDisplay;
