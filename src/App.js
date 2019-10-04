import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/Users/UserItem';

import Users from './components/Users/Users';

import './App.css';

class App extends Component {
  
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
