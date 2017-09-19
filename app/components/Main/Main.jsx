import React from 'react';
import NavBar from 'NavBar';
import {Route, Switch} from 'react-router-dom';

import HomePage from 'HomePage';
import SearchBox from 'SearchBox';
import Wishlist from 'Wishlist';

class Main extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/search" component={SearchBox}/>
          <Route path="/wishlist" component={Wishlist}/>
          </Switch>
      </div>
    )
  }
}

export default Main;
