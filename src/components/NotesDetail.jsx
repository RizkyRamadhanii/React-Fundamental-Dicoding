import React from "react";
import PropTypes from 'prop-types'
import { FiXOctagon } from "react-icons/fi";
import {showFormattedDate } from "../utils";

function NotesDetail({id, title, body, createdAt, archived, onDelete}) {

    <section>
         <div className="content">
        <h2 className="detail-page__title">{title}</h2>
        <p className="detail-page__createAt">{showFormattedDate(createdAt)}</p>
        <p className="detail-page__body">{body}</p>
        <p>{archived}</p>
        <div className="detail-page__action">
          <button className="action" type="button" onClick={() => onDelete(id)}>
            <FiXOctagon />
          </button>
        </div>
      </div>
    </section>
}

export default NotesDetail;