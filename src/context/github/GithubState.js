import React,{ useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import { SEARCH_USERS, SET_ALERT, SET_LOADING, GET_USER_REPOS, GET_USER, CLEAR_USERS } from '../types';
import { stat } from 'fs';
import { async } from 'q';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);
    
    //Search Users
    const searchUser = async (name) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
          dispatch({
              type: SEARCH_USERS,
              payload: res.data.items
          });    
      }
    //Get User
    const getUser = async profileName => {
        setLoading();
       const res = await axios.get(`https://api.github.com/users/${profileName}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
      }


    // get repos

    const getUserRepos = async (profileName) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${profileName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER_REPOS,
            payload: res.data
        })
      }

    // clear users
    const clearUsers = () => dispatch({ CLEAR_USERS });

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <githubContext.Provider
    value = {{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUsers,
        getUser,
        getUserRepos
    }}
    >
        {props.children}
    </githubContext.Provider>
}

export default GithubState;