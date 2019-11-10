import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/spinner';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    state = {
        loading: this.props.loading
    }
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    }
    render() {
        const {
            name,
            login,
            avatar_url,
            location,
            bio,
            followers,
            html_url,
            blog,
            following,
            public_repos,
            hireable
        } = this.props.user;

        return (
        <div> 
            <h1>
            Hello {name} we know you as {login}
            </h1> 
            <h2> You live in {location} </h2>

        </div>
        )
    }
}

export default User
