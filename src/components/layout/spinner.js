import React,{ Fragment } from 'react'
import spinner from '../layout/spinner.gif';

const Spinner =  () => {
    return(
        <div>
            <Fragment>
                <img src={spinner} alt='Loading...' style={{width: '200px', margin: 'auto', display:'block'}}></img>
            </Fragment>
        </div>
    )
}

 
export default Spinner;