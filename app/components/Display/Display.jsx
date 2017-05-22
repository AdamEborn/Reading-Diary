import React from 'react';

import SearchForm from 'SearchForm';


class Display extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: []
		}
	}

	render() {
		var {content} = this.props;
		var style = {
			border: '1px solid black',
			display: 'inline-block',
			width: '83%'
		}
		return (
			<div style={style}>
			<SearchForm></SearchForm>
			</div>)
	}
};

export default Display;
