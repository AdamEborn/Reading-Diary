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
		}

		var thumbCell = {
			width: '50px',
			borderRight: '1px solid green'
		}

		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'
		}

		var displayData = this.props.content.map(function(book) {
			return (
				<div>
				<table style={rowStyle}>
				<tbody>
					<tr rowSpan="3" style={rowStyle}> 
						<td style={thumbCell} key={book.thumbnailPic}> {book.thumbnailPic} </td> 
						<td> Title: </td> <td key={book.title}> {book.title} </td>
					</tr>
					<tr style={rowStyle}>
						<td> Author: </td> <td key={book.author}> {book.author} </td>
					</tr>
					<tr style={rowStyle}>
						<td> Description: </td> <td key={book.description}> {book.description} </td>
					</tr>
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
