import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import SearchBox from 'SearchBox';
import Wishlist from 'Wishlist';
import './../firebase/index';

require('./redux-example.jsx');;

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

//todo
//user account -
//(if this.state.user === "") {
//only show user select component in nav bar
//}
//else {show everything else}


//will need account settings page
//if (this.state.user !== "") {
//show setiings
//}
