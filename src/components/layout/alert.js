import React, {useContext} from 'react';
import alertContext from '../../context/alert/alertContext';

const Alert = () => {
    const AlertContext = useContext(alertContext);

    const { alert } = AlertContext
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
