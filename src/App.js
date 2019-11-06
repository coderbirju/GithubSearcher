import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/search';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
  componentDidMount() {
    this.setState({
      loading:true,
      alert:null
    });
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(response => {
    this.setState({
      users: response.data,
      loading:false,
      alert: null
    });
    });
  }

  searchUser = (name) => {
    this.setState({
      users: [],
      loading: true, 
      alert: null
    });
    axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
      this.setState({
        users: res.data.items,
        loading:false});      
    })
  }

  setAlert = (message,dispType) => {
    this.setState({
      alert: {  message, dispType }
    })
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }
  
  render (){
    const {loading, users} = this.state;
    return (
      <Fragment>
      <Navbar/>
      <div className='container'>
      <Search 
      searchUser={this.searchUser} 
      clearUsers={this.clearUsers} 
      showClear={ this.state.users.length > 0? true: false }
      setAlert={this.setAlert}  
      />
      <Users loading={loading} users={users}></Users>
      </div>
      </Fragment>
    );
  }
}

export default App;
