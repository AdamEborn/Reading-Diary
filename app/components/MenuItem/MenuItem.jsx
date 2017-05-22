import React from 'react';


 class MenuItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var {className, displayText} = this.props;
		var style = {
			backgroundColor: '#F0F8FF',
			border: '1px solid black',
			boxShadow: '5px 5px 2px grey',
			height: '2rem',
			paddingTop: '1.2rem',
			textAlign: 'center',
			width: '100%'
		}
		var innerStyle = {
			fontFamily: 'Helvetica'
		}

		return(
			<div style={style} className={className}>
				<span style={innerStyle}>{displayText}</span>
			</div>
			);
	}
};
export default MenuItem;
