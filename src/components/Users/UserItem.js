/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

class UserItem extends Component {
    render() {
        const { avatar_url, login, html_url } = {...this.props.user};
        
        
        return (
            <div className= 'card text-center'>
            <div className = 'd-flex justify-content-center'>
            <img src = {avatar_url} alt='' className = 'round-img responsive' style= {{ width: '60px'} } />
            
            </div>
            <div>
                <p>{login}</p>
            </div>
            <div>
                <a href={html_url} className='btn btn-dark btn-sm'>Profile</a>
            </div>
        </div>
        )
    }
}

export default UserItem
