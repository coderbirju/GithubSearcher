import React from 'react';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Pages/home';
import Alert from './components/layout/alert';
import About from './components/Pages/about';
import User from './components/Users/user';
import NotFound from './components/Pages/notFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => { 
  // Default is put at the end ex: Not found component
    return (
        <GithubState>
          <AlertState>
            <Router>
              <div>
                <Navbar/>
                <div className='container'>
                  <Alert/>
                  <Switch> 
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/user/:login' component= {User}/> 
                  <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;
