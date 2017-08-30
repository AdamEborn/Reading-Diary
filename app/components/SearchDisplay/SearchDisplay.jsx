import React from 'react';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

import SearchForm from 'SearchForm';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wishlistUrls: []
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
			thumbnailPic: bookToSave.thumbnailPic
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

		var tableStyle = {
			border: '1px solid black',
			borderCollapse: 'collapse',
			width: '50%'}
		var rowStyle = {
			border: '1px solid black'}
		var nonThumbCell = {
			borderRight: '1px solid black',
			height: '10px',
			paddingLeft: '3px'}
		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'}
		var thumbCell = {
			borderRight: '1px solid black',
			width: '120px'}
		var bottomNonThumbCell = {
			borderRight: '1px solid black',
			paddingLeft: '5px',}

			switch (this.props.mode) {
				case 'searchRes':
					var displayData = this.props.content.map(function(book, index) {
						return (
							<div key={index}>
							<br/>
							<table style={tableStyle}>
							<tbody>
								<tr style={rowStyle}>
									<td rowSpan="4" style={thumbCell}><img src={book.thumbnailPic}/></td>
									<td style={nonThumbCell}><strong>Title:</strong></td>
									<td colSpan="2" style={nonThumbCell}>{book.bookTitle}</td>
								</tr>
								<tr style={rowStyle}>
									<td style={nonThumbCell}><strong>Author:</strong></td>
									<td colSpan="2" style={nonThumbCell}>{book.author}</td>
								</tr>
								<tr style={rowStyle}>
									<td style={nonThumbCell}> <strong>Description:</strong></td>
									<td colSpan="2" style={nonThumbCell}>{book.bookDescription}</td>
								</tr>
								<tr style={rowStyle}>
									<td style={bottomNonThumbCell}><a href={book.link} target="_blank">Read More...</a></td>
									<td style={bottomNonThumbCell}><span onClick={this.saveBookToWishlist.bind(this, book)}>Add to Wishlist</span></td>
									<td style={bottomNonThumbCell}><span>Add to Read List</span></td>
								</tr>
								</tbody>
							</table>
							<br/>
						</div>
							)
					}, this)
					break;

					case 'wish':
						var displayData = this.props.content.map(function(book, index) {
						return (
							<div key={index}>
							<br/>
							<table style={tableStyle}>
							<tbody>
								<tr style={rowStyle}>
									<td rowSpan="4" style={thumbCell}><img src={book.thumbnailPic}/></td>
									<td style={nonThumbCell}><strong>Title:</strong></td>
									<td colSpan="2" style={nonThumbCell}>{book.bookTitle}</td>
								</tr>
								<tr style={rowStyle}>
									<td style={nonThumbCell}><strong>Author:</strong></td>
									<td colSpan="2" style={nonThumbCell}>{book.author}</td>
								</tr>
								<tr style={rowStyle}>
									<td style={nonThumbCell}> <strong>Description:</strong></td>
									<td colSpan="2" style={nonThumbCell}>{book.bookDescription}</td>
								</tr>
								<tr style={rowStyle}>
									<td style={bottomNonThumbCell}><a href={book.link} target="_blank">Read More...</a></td>
									<td style={bottomNonThumbCell}><span onClick={this.removeBookFromWishlist.bind(this, book)}>Remove From Wishlist</span></td>
									<td style={bottomNonThumbCell}><span>Add to Read List</span></td>
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
