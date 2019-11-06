import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state ={
        name: ''
    }

    static propTypes = {
        searchUser: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };
    onChange = e => {
        this.setState(
            {
                name: e.target.value
            }
        )
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.name === ''){
            this.props.setAlert('Please provide a name to search', 'light');
        } else {
            this.props.searchUser(this.state.name);
        }
    }
    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form className='form' onSubmit= {this.onSubmit}>
                    <input type='text' name='Search' placeholder='example@cybrilla' value= {this.state.name} onChange= {this.onChange}/>
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
}

export default Search
