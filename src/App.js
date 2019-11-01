import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  async componentDidMount() {
  const response = await axios.get('https://api.github.com/users')
  console.log(response.data);
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
