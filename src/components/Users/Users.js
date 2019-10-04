/* eslint-disable no-undef */
import React, { Component } from 'react';
import UserItem  from './UserItem';


class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'Birju',
                avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
                html_url: 'https://github.com/mojombo'  
            } ,
            {
                id: '2',
                login: 'Arjun',
                avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
                html_url: 'https://github.com/mojombo'  
            } ,
            {
                id: '3',
                login: 'Raja',
                avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
                html_url: 'https://github.com/mojombo'  
            }
        ]
    }
    render() {
        const {users} = this.state;
        const test = users.map((user, index) => {
            console.log(user, index);
            return (
                <UserItem key={user.id} user={user} />
            );
        })
        console.log("hmmmmm", test.length);
        return (
            <div style={userStyle}>
                {test}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

}

export default Users;
