import React from 'react';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

import SearchForm from 'SearchForm';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	saveBookToWishlist(bookToSave) {
		console.log(bookToSave)
		var savedBook = {
			title: bookToSave.bookTitle,
			author: bookToSave.author,
			description: bookToSave.bookDescription,
			link: bookToSave.link
		}
		firebase.database().ref().child('wishlist').push(savedBook);
	}

	render() {
		var tableStyle = {
			border: '1px solid black',
			borderCollapse: 'collapse',
			width: '100%'}
		var rowStyle = {
			border: '1px solid black'}
		var nonThumbCell = {
			borderRight: '1px solid black',
			height: '20px',
			paddingLeft: '5px'}
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

		var displayData = this.props.content.map(function(book, index) {
			return (
				<div key={index}>
				<br/>
				<table style={tableStyle}>
				<tbody>
					<tr style={rowStyle}>
						<td rowSpan="4" style={thumbCell}>{book.thumbnailPic}</td>
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
						<td style={bottomNonThumbCell}><a href={book.link}>Read More...</a></td>
						<td style={bottomNonThumbCell}><span>Add to Wishlist</span></td>
						<td style={bottomNonThumbCell}><span onClick={this.saveBookToWishlist.bind(this, book)}>Add to Read List</span></td>
					</tr>
					</tbody>
				</table>
				<br/>
			</div>
				)
		}, this)
			return (
			<div>
				{displayData}
			</div>)
	};
}

export default SearchDisplay;
