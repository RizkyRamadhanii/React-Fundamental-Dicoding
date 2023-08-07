import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

function DeleteButton({ onDelete, id }) {
    return (
        <button onClick={() => onDelete(id)} className='note-item__delete-button'><FiTrash2/></button>
    )
}

DeleteButton.propTypes = {
    id:PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;