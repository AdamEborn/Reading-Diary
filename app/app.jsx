import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import SearchBox from 'SearchBox';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="search" component={SearchBox}/>
		</Route>
	</Router>
,
  document.getElementById('app')
);
