import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUser, showClear, clearUsers, setAlert }) => {
   const [name, setName] = useState('');

    const onChange = e => {
        setName(e.target.value)
    }

   const onSubmit = e => {
        e.preventDefault();
        if(name === ''){
            setAlert('Please provide a name to search', 'light');
        } else {
            searchUser(name);
            setName('');
        }
    }
        return (
            <div>
                <form className='form' onSubmit= {onSubmit}>
                    <input type='text' name='Search' placeholder='example@cybrilla' value= {name} onChange= {onChange}/>
                    <input type='submit' value='Search' className='btn btn-block btn-dark'/>
                </form>
                {showClear? 
                <button className='btn btn-light btn-block' onClick = {clearUsers}>
                   Clear
                </button>
                :
                '' 
                }
            </div>
        )
}

Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
