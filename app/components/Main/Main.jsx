import React from 'react';

import Header from 'Header';
import MenuContainer from 'MenuContainer';
import Display from 'Display';

class Main extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
          <Header></Header>
          <MenuContainer></MenuContainer>
          <Display></Display>
      </div>
    )
  }
}

export default Main;
