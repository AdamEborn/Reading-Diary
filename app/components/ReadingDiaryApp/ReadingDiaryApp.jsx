import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import SearchBox from 'SearchBox';
import Wishlist from 'Wishlist';

class ReadingDiaryApp extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="search" component={SearchBox}/>
          <Route path="wishlist" component={Wishlist}/>
        </Route>
      </Router>
    )
  }
}

export default ReadingDiaryApp;
