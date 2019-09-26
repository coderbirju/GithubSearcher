import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Navbar extends Component {
    static defaultProps = {
        icon : 'fa fa-github',
        title: 'Github Finder'
    }

    // eslint-disable-next-line react/no-typos
    static propTypes = {
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
        
    }
    render() {
        return (
            <nav className='navbar bg-danger'>
                <h1>
                <i className= {this.props.icon}></i>  
                {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
