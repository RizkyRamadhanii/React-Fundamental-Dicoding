import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NotesCard({ id, title, body, createdAt, onDelete, onArchive, archived}) {
    return (
      <section className="note-item">
        <div className="note-item__content">
          <p className="note-item__title"> <Link to={`/notes/${id}`}>{title}</Link></p>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
          <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id}  archived={archived} onDelete={onDelete} onArchive={onArchive}/>
          </div>
        </div>
      </section>
    )
}


NotesCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
}

export default NotesCard;