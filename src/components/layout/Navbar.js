import React from 'react'
import PropTypes from 'prop-types';
const Navbar = ({icon,title}) => {
        return (
        <nav className='navbar bg-danger'>
            <h1>
                <i className= {icon}></i>  
                {title}
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    icon : 'fa fa-github',
    title: 'Github Finder'
}

// eslint-disable-next-line react/no-typos
Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
    
}

export default Navbar
