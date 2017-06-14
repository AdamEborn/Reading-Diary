import React from 'react';

import SearchForm from 'SearchForm';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props)
	}

	/*
	saveToWishlist(book) {
		var book = book;

	}

	*/

	render() {

		var tableStyle = {
			border: '1px solid black',
			borderCollapse: 'collapse',
			width: '100%'
		}

		var rowStyle = {
			border: '1px solid black'
		}

		var nonThumbCell = {
			borderRight: '1px solid black',
			height: '20px',
			paddingLeft: '5px'
		}

		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'
		}

		var thumbCell = {
			borderRight: '1px solid black',
			width: '150px'
		}

		var bottomNonThumbCell = {
			borderRight: '1px solid black',
			height: '20px',
			paddingLeft: '5px'
		}


		var displayData = this.props.content.map(function(book, index) {
			return (

				<div key={index}>
				<br/>
				<table style={tableStyle}>
				<tbody>
					<tr style={rowStyle}> 
						<td rowSpan="4" style={thumbCell}>{book.thumbnailPic}</td> 
						<td style={nonThumbCell}><strong>Title:</strong></td>
						<td style={nonThumbCell}>{book.bookTitle}</td>
						<td style={thumbCell} rowSpan="4">Add To Wishlist</td>
					</tr>
					<tr style={rowStyle}>
						<td style={nonThumbCell}><strong>Author:</strong></td><td style={nonThumbCell}>{book.author}</td>
					</tr>
					<tr style={rowStyle}>
						<td style={nonThumbCell}> <strong>Description:</strong></td><td style={nonThumbCell}>{book.bookDescription}</td>
					</tr>
					<tr style={rowStyle}> <td style={bottomNonThumbCell}><a href={book.link}>Read More...</a></td></tr>
					</tbody>
				</table>
				<br/>
			</div>

				)
		}) 
			return (
			<div>
				{displayData}
			</div>)	
}; 


	}

export default SearchDisplay;