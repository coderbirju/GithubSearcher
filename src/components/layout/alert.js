import React from 'react';

const Alert = ({ alert }) => {
    return (
        alert !== null && 
        <div className={`alert alert-${alert.dispType}`}>
           <i className='fa fa-window-close'>
              {` ${alert.message}`}
           </i> 
        </div>
    )
}

export default Alert;
