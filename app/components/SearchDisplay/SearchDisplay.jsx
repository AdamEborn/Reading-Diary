import React from 'react';

import SearchForm from 'SearchForm';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var imageBorder = {
			borderRight: '1px solid black',
		}

		var textField = {
			borderBottom: '1px solid black'
		}

		var textFieldRight = {
			borderBottom: '1px solid black',
			borderRight: '1px solid black',
			paddingLeft: '10px'
		}

		var textFieldBottom = {
			paddingLeft: '10px'
		}

		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'
		}

		var tableStyle = {
			border: '1px solid black',
			borderCollapse: 'collapse',
			height: '150px',
			width: '100%'
		}

		var displayData = this.props.content.map(function(book, index) {
			return (
				<div key={index}>
				<table style={tableStyle}>
				<tbody>
					<tr > 
						<td rowSpan="4" style={imageBorder}>{book.thumbnailPic}</td> 
						<td style={textField}>Title:</td><td style={textFieldRight}>{book.bookTitle}</td>
					</tr>
					<tr>
						<td style={textField}>Author:</td><td style={textFieldRight}>{book.author}</td>
					</tr>
					<tr>
						<td style={textField}> Description:</td><td style={textFieldRight}>{book.bookDescription}</td>
					</tr>
					<tr> <td style={textFieldBottom}><a href={book.link}>Read More...</a></td></tr>
					</tbody>
				</table>
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