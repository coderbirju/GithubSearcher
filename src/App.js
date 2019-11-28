import React, { useState, useEffect } from 'react';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/search';
import Alert from './components/layout/alert';
import About from './components/Pages/about';
import User from './components/Users/user';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => { 
    return (
        <GithubState>
          <AlertState>
            <Router>
              <div>
                <Navbar/>
                <div className='container'>
                  <Alert alert={alert}/>
                  <Switch> 
                  <Route exact path='/' render={ props => (
                    <>
                      <Search/>
                      <Users/>
                    </>
                  )}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/user/:login' component= {User}/> 
                  </Switch>
                </div>
              </div>
            </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;
