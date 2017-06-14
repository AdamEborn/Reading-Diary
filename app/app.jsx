import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import SearchBox from 'SearchBox';
import Wishlist from 'Wishlist';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="search" component={SearchBox}/>
			<Route path="wishlist" component={Wishlist}/>
		</Route>
	</Router>
,
  document.getElementById('app')
);

//to del
//require('./redux-example.jsx');