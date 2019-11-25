import React, { useState, useEffect } from 'react';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/search';
import Alert from './components/layout/alert';
import About from './components/Pages/about';
import User from './components/Users/user';
import GithubState from './context/github/GithubState';
import './App.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlertSt] = useState(null);

  useEffect(()=> {
    setLoading(true);
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(response => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []); 
  

  const searchUser = (name) => {
    setLoading(true);
    axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
      setUsers(res.data.items);
      setLoading(false);     
    })
  }

  const getUser = (profileName) => {
    setLoading(true);
   axios.get(`https://api.github.com/users/${profileName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => {
    setUser(res.data);
    setLoading(false);
   });
  }

  // get user repos

  const getUserRepos = async (profileName) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${profileName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  }


  const setAlert = (message,dispType) => {
    setAlertSt(message,dispType);

    setTimeout(()=>setAlertSt(null), 3000);
    
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }
  
    return (
        <GithubState>
          <Router>
            <div>
              <Navbar/>
              <div className='container'>
                <Alert alert={alert}/>
                <Switch> 
                <Route exact path='/' render={ props => (
                  <>
                    <Search 
                    searchUser={searchUser} 
                    clearUsers={clearUsers} 
                    showClear={ users.length > 0? true: false }
                    setAlert={setAlert}  
                    />
                    <Users loading={loading} users={users}></Users>
                  </>
                )}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' render={ props => (
                  <User 
                  {...props} 
                  getUser= {getUser} 
                  getUserRepos= {getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading}
                  />
                  )} /> 
                </Switch>
              </div>
            </div>
          </Router>
        </GithubState>
    );
}

export default App;
