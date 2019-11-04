import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: true
  }
  componentDidMount() {
    this.setState({loading:true});
    axios.get('https://api.github.com/users').then(response => {
    this.setState({
      users: response.data,
      loading:false});
    });

  }
  
  render (){
    return (
      <Fragment>
      <Navbar></Navbar>
      <Users loading={this.state.loading} users={this.state.users}></Users>
      </Fragment>
    );
  }
}

export default App;
