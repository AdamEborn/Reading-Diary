import React from 'react';

import SearchForm from 'SearchForm';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		var tableStyle = {
			border: '1px solid black',
			borderCollapse: 'collapse'
		}

		var rowStyle = {
			border: '1px solid black'

		var nonThumbCell = {
			height: '20px',
			paddingLeft: '5px'


		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'
		}

		var thumbCell = {
			width: '150px'
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
					</tr>
					<tr style={rowStyle}>
						<td style={nonThumbCell}><strong>Author:</strong></td><td style={nonThumbCell}>{book.author}</td>
					</tr>
					<tr style={rowStyle}>
						<td style={nonThumbCell}> <strong>Description:</strong></td><td style={nonThumbCell}>{book.bookDescription}</td>
					</tr>
					<tr style={rowStyle}> <td style={nonThumbCell}><a href={book.link}>Read More...</a></td></tr>
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