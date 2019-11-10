import React, { Component } from 'react';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/search';
import Alert from './components/layout/alert';
import About from './components/Pages/about';
import User from './components/Users/user';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user: {},
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

  getUser = async (profileName) => {
    this.setState({
      loading: true,
    })
    const res = await axios.get(`https://api.github.com/users/${profileName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      user: res.data,
      loading: false
    })
    // console.log(res);
  }

  setAlert = (message,dispType) => {
    this.setState({
      alert: {  message, dispType }
    })

    setTimeout(()=>{this.setState({alert:null})},3000);
    console.log(message,',', dispType);
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }
  
  render (){
    const {loading, user, users} = this.state;
    return (
      <Router>
        <div>
          <Navbar/>
          <div className='container'>
            <Alert alert={this.state.alert}/>
            <Switch> 
            <Route exact path='/' render={ props => (
              <>
                <Search 
                searchUser={this.searchUser} 
                clearUsers={this.clearUsers} 
                showClear={ this.state.users.length > 0? true: false }
                setAlert={this.setAlert}  
                />
                <Users loading={loading} users={users}></Users>
              </>
            )}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={ props => (
              <User 
              {...props} 
              getUser= {this.getUser} 
              user={user}
              loading={loading}
              />
              )} /> 
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
