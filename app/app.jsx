import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import $ from "jquery";
import Main from 'Main';

import './../firebase/index';

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
	<HashRouter>
		<Main />
	</HashRouter>,
  document.getElementById('app')
)

require('./redux-example.jsx');
//require('./redux-todo.jsx');




//todo
//user account -
//(if this.state.user === "") {
//only show user select component in nav bars
//}
//else {show everything else}


//will need account settings page
//if (this.state.user !== "") {
//show setiings
//}
