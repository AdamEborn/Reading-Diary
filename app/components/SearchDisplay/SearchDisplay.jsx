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
			borderBottom: '1px solid blue',
			width: '100%'
		}

		var thumbCell = {
			width: '150px',
			borderRight: '1px solid green'
		}

		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'
		}

		var displayData = this.props.content.map(function(book, index) {
			console.log(index)
			return (
				<div>
				<table style={rowStyle} key={index}>
				<tbody>
					<tr rowSpan="3" style={rowStyle}> 
						<td style={thumbCell} key={book.thumbnailPic.toString()}>{book.thumbnailPic}</td> 
						<td>Title:</td><td>{book.bookTitle}</td>
					</tr>
					<tr style={rowStyle}>
						<td>Author:</td><td key={book.author}>{book.author}</td>
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
