import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import ReadingDiaryApp from 'ReadingDiaryApp';

import './../firebase/index';

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

ReactDOM.render(
		<ReadingDiaryApp />,
  document.getElementById('app')
)

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
