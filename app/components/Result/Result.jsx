import React from 'react';

class Result extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div>
				<table>
					<tr rowSpan="3"> 
						<td> {this.props.data.objInArr.thumbnailPic} </td> 
						<td> Title: </td> <td> {this.props.data.objInArr.title} </td>
					</tr>
					<tr>
						<td> Author: </td> <td> {this.props.data.objInArr.author} </td>
					</tr>
					<tr>
						<td> Description: </td> <td> {this.props.data.objInArr.description} </td>
					</tr>
				</table>
			</div>
			)
	}

}

export default Result;