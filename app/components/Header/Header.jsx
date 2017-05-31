import React from 'react';

 class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var {className, displayText} = this.props;
		var style = {
			backgroundColor:'#2E8B57',
			height: '10%',
      		marginBottom: '0.5%',
			width: '100%'
		}

		return(
			<div style={style} className={className}>
				<h3>My Bookshelf</h3>
			</div>
			);
	}
};
export default Header;
