import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton({ onDelete, id }) {
    return (
        <button onClick={() => onDelete(id)} className='note-item__delete-button'>Hapus</button>
    )
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;