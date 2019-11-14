import React, { Component, Fragment  } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/spinner';
import { Link } from 'react-router-dom';

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
            company,
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
        <Fragment> 
            <Link to='/' className='btn btn-light'>Back to search</Link>
            Hireable: {''}
            {hireable? <i className='fa fa-check text-success' /> : <i className='fa fa-times-circle text-danger' /> } 
            <div className="card grid-2">
             <div className='all-center'>
                <img src={avatar_url} className='round-img' alt='' style={{width: '150px'}}/>
                <h1>Name: {name}</h1>
                <div className='badge badge-dark'>Location: {location}</div>
             </div>
              <div>
                {bio && <><h1>Bio</h1> {bio}</>}
                <a href={html_url} className='btn btn-dark my-1'>Visit github profile</a>
                <Fragment>
                    <ul>
                        <li>
                            <strong>Username:</strong> {login}
                        </li>
                        {company && <li>
                            <strong>Company: </strong> {company}
                        </li>}
                        {blog && <li>
                            <div>
                            <strong>blog: </strong> 
                            {blog}
                            </div>
                        </li>}
                    </ul>
                </Fragment>
              </div>
            </div>
            <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>Following: {following}</div>
                    <div className='badge badge-danger'>Public Repos: {public_repos}</div>
                    <div className='badge badge-dark'>empty</div>
            </div>
        </Fragment>
        )
    }
}

export default User
