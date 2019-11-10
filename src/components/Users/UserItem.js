/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: {avatar_url, login, html_url}}) => {
    return (
        <div className= 'card text-center'>
            <div className = 'd-flex justify-content-center'>
                <img src = {avatar_url} alt='' className = 'round-img responsive' style= {{ width: '60px'} } />
            </div>
            <div>
                <p>{login}</p>
            </div>
            <div>
                <Link to={`/user/${login}`} className='btn btn-dark btn-sm'>Profile</Link>
            </div>
        </div>
    );
}
UserItem.PropType = {
    user: PropTypes.object.isRequired
}

export default UserItem;
