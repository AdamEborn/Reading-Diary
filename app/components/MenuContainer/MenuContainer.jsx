import React from 'react';

import MenuItem from 'MenuItem';



class MenuContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var style = {
			border: '1px solid black',
			display: 'inline-block',
			float: 'left',
			height: '90%',
			marginRight: '1%',
			width: '15%'
		}

		return(
			<div style={style} className="container">
				<MenuItem className="menu-item" displayText="Books I Have Read" />
				<MenuItem className="menu-item" displayText="Books I Want To Read" />
				<MenuItem className="menu-item" displayText="Search For Books" />
				<MenuItem className="menu-item" displayText="My Settings" />
				<MenuItem className="menu-item" displayText="Statistics" />
			</div>
			);
	}
};

export default MenuContainer;
