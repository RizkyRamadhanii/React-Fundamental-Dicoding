import React from 'react';

function NotesSearch ({ keyword, keywordChange }) {
    return (

        <div className='search-bar'>
            <input
                type="text"
                placeholder='Cari catatan ...'
                value={keyword}
                onChange={(e) => keywordChange(e.target.value)} />
        </div>
      
    );
}

export default NotesSearch;