import React from 'react';
import NavBar from 'NavBar';

class Main extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        {this.props.children}
      </div>
    )
  }
}

export default Main;
