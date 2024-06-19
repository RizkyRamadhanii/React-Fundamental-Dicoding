import React from 'react';
import NotesCard from './NotesCard';
import PropTypes from 'prop-types';


function Notes({notes, onDelete, onArchive}) {
    return (
        <div className='notes-list'>
                {notes.length === 0 ? (
                    <p className="notes-list__empty-message">Tidak ada catatan</p>
                    
                ): notes.map((note) => (
                    <NotesCard 
                    {...note} 
                    key={note.id}
                    id={note.id}
                    onDelete= {onDelete}
                    onArchive= {onArchive}
                    />
                ))
                }
        </div>

    )
}


Notes.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}



export default Notes;