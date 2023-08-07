import React from 'react';
import PropTypes from 'prop-types';

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

NotesSearch.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
}

export default NotesSearch;