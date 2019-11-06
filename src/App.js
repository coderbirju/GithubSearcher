import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/search';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  componentDidMount() {
    this.setState({loading:true});
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(response => {
    this.setState({
      users: response.data,
      loading:false});
    });
  }
  searchUser = (name) => {
    this.setState({
      users: '',
      loading: true
    });
    axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
      this.setState({
        users: res.data.items,
        loading:false});      
    })
  }
  
  render (){
    return (
      <Fragment>
      <Navbar/>
      <div className='container'>
      <Search searchUser={this.searchUser}/>
      <Users loading={this.state.loading} users={this.state.users}></Users>
      </div>
      </Fragment>
    );
  }
}

export default App;
