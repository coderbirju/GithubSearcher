import React, {  Fragment, useEffect  } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

const User = ({user, loading, getUser, getUserRepos, repos, match}) => {
    useEffect(()=> {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
 
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
            hireable,
            email
        } = user;

        return (
        <Fragment> 
            <Link to='/' className='btn btn-light'>Back to search</Link>
            Hireable: {''}
            {hireable? <i className='fa fa-check text-success' /> : <i className='fa fa-times-circle text-danger' /> } 
            <div className="card grid-2">
             <div className='all-center'>
                <img src={avatar_url} className='round-img' alt='' style={{width: '150px'}}/>
                <h3>Name: {name}</h3>
                <h6>Email: {email}</h6>
                <div className='badge badge-dark'>Location: {location}</div>
             </div>
              <div>
                <div>{bio && <><h1>Bio</h1> {bio}</>}</div>
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
            <div >
                <Repos repos={repos} />
            </div>
        </Fragment>
        )
}

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

export default User
