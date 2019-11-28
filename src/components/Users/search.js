import React, { useState, useContext } from 'react';
import alertContext from '../../context/alert/alertContext';
import githubContext from '../../context/github/githubContext';

const Search = () => {
    const GithubContext = useContext(githubContext);
    const AlertContext = useContext(alertContext);
    const [name, setName] = useState('');


    const onChange = e => {
        setName(e.target.value)
    }

   const onSubmit = e => {
        e.preventDefault();
        if(name === ''){
            AlertContext.setAlert('Please provide a name to search', 'light');
        } else {
            GithubContext.searchUser(name);
            setName('');
        }
    }
        return (
            <div>
                <form className='form' onSubmit= {onSubmit}>
                    <input type='text' name='Search' placeholder='example@cybrilla' value= {name} onChange= {onChange}/>
                    <input type='submit' value='Search' className='btn btn-block btn-dark'/>
                </form>
                {GithubContext.users.length > 0 ? 
                <button className='btn btn-light btn-block' onClick = {GithubContext.clearUsers}>
                   Clear
                </button>
                :
                '' 
                }
            </div>
        )
}



export default Search
