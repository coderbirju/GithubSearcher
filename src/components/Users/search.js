import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state ={
        name: ''
    }

    static propTypes = {
        searchUser: PropTypes.func.isRequired
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
        this.props.searchUser(this.state.name);
    }
    render() {
        return (
            <div>
                <form className='form' onSubmit= {this.onSubmit}>
                    <input type='text' name='Search' placeholder='example@cybrilla' value= {this.state.name} onChange= {this.onChange}/>
                    <input type='submit' value='Search' className='btn btn-block btn-dark'/>
                </form>
            </div>
        )
    }
}

export default Search
