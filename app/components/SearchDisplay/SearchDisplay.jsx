import React from 'react';

import SearchForm from 'SearchForm';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var tableStyle = {}

		var rowStyle = {
			border: '1px solid black',
			borderBottom: '1px solid blue'
		}

		var thumbCell = {
			width: '150px',
			borderRight: '1px solid green'
		}

		var nonThumbCell = {
			borderBottom: '1px solid green',
			height: '20px'

		}

		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'
		}

		var displayData = this.props.content.map(function(book, index) {
			return (
				<div key={index}>
				<table>
				<tbody>
					<tr rowSpan="3" style={rowStyle}> 
						<td style={thumbCell}>{book.thumbnailPic}</td> 
						<td style={nonThumbCell}>Title:</td><td>{book.bookTitle}</td>
					</tr>
					<tr style={rowStyle}>
						<td>Author:</td><td>{book.author}</td>
					</tr>
					<tr style={rowStyle}>
						<td> Description:</td><td>{book.bookDescription}</td>
					</tr>
					<tr> <td><a href={book.link}>Read More...</a></td></tr>
					</tbody>
				</table>
			</div>
				)
		}) 
			return (
			<div style={style}>
				{displayData}
			</div>)	
}; 


	}

export default SearchDisplay;
