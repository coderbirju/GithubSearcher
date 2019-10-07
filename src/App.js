import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';

import Users from './components/Users/Users';

import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(123);
  }
  
  render (){
    return (
      <Fragment>
      <Navbar ></Navbar>
      <Users></Users>
      </Fragment>
    );
  }
}

export default App;
