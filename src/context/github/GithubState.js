import React,{ useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import { SEARCH_USERS, SET_ALERT, SET_LOADING, GET_USER_REPOS, GET_USER, CLEAR_USERS } from '../types';
import { stat } from 'fs';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);
    
    //Search Users
    
    //Get User

    // get repos

    // clear users

    // set loading

    return <githubContext.Provider
    value = {{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
    }}
    >
        {props.children}
    </githubContext.Provider>
}

export default GithubState;