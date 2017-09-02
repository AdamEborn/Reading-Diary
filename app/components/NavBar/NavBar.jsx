import React from 'react';
import {Link, IndexLink} from 'react-router';

 class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li> <IndexLink to="/">Main Page</IndexLink ></li>
            <li> <Link to="/search">Search</Link> </li>
            <li> <Link to="/wishlist">Wishlist</Link> </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Reading Diary App</li>
          </ul>
        </div>
      </div>
		);
	}
};

export default NavBar;
