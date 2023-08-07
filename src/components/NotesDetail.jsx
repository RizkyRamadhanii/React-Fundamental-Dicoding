import React from "react";
import PropTypes from 'prop-types'
import {showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";

function DetailNotes({id, title, body, createdAt, onDelete}) {
    <section>
         <div className="content">
        <h2 className="detail-page__title">{title}</h2>
        <p className="detail-page__createAt">{showFormattedDate(createdAt)}</p>
        <p className="detail-page__body">{body}</p>
        <div className="detail-page__action">
        <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete}/>
          </div>
        </div>
      </div>
    </section>
}

export default DetailNotes;