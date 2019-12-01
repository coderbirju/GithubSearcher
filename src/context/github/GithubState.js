import React,{ useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, GET_USER_REPOS, GET_USER, CLEAR_USERS } from '../types';



let githubClientID;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else {
    githubClientID = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

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
        const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=${githubClientID}&client_secret=${githubClientSecret}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });    
    }
    //Get User
    const getUser = async profileName => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${profileName}?&client_id=${githubClientID}&client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
    
    
    // get repos
    
    const getUserRepos = async (profileName) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${profileName}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_USER_REPOS,
            payload: res.data
        })
    }
    
    // clear users
    const clearUsers = () => {
        dispatch({ type: CLEAR_USERS });
        console.log('state: ', state);
    }
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