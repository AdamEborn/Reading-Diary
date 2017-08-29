import React from 'react';
import {Link, IndexLink} from 'react-router';

 class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    
		var {className} = this.props;
		var divStyle = {
      backgroundColor:'#2E8B57',
      height: '15%',
      marginBottom: '0.5%',
      width: '100%'
		}
		var linkStyle = {
      textDecoration: 'none',
      color: 'white'
		}
		var list = {
      listStyleType: 'none'
		}

		return (
			<div style={divStyle} className={className}>
				<ul style={list}>
					<li><IndexLink to="/" style={linkStyle}>Main Page</IndexLink></li>
					<li> <Link to="/search" style={linkStyle}>Search</Link></li>
					<li> <Link to="/wishlist" style={linkStyle}>Wishlist</Link></li>
				</ul>
			</div>
			);
	}
};

export default NavBar;
