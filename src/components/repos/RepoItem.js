import React from 'react'
import PropTypes from 'prop-types';


const RepoItem = ({repo}) => {
    return (
        <div className='card text-left'>
            <h5>
                <a href={repo.html_url}> {repo.name} </a>
            </h5>
        </div>
    )
}

RepoItem.protoTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem;