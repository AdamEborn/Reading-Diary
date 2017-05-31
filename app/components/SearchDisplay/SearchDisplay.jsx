import React from 'react';

import Result from 'Result';

class SearchDisplay extends React.Component {
	constructor(props) {
		super(props)
}
/*

      var content = this.props;
		content.forEach(function (objInArr) {
			return (
				<div>
				<Result data={objInArr}></Result>
				</div>
				)
		});

*/
	render() {
		var style = {
			border: '1px solid black',
			display: 'inline-block',
			height: '80%',
			width: '83%'
		}
		return (
			<div style={style}>

			</div>)
	}
};

export default SearchDisplay;
