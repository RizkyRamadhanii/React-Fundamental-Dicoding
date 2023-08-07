import React from 'react';
import PropTypes from 'prop-types';


function ArchiveButton({ id, onArchive, isArchive }) {
    return <button className="note-item__archive-button" onClick={()=> onArchive(id)}>{isArchive ? 'Pindahkan':'Arsipkan'}</button>
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    isArchive: PropTypes.bool.isRequired,
}

export default ArchiveButton;