import React from "react";
import PropTypes from 'prop-types'
import {showFormattedDate } from "../utils";

function DetailNotes({ title, body, createdAt }) {
  return(
  
      <section className="detail">
        <h2 className="detail-page__title">{title}</h2>
        <p className="detail-page__date">{showFormattedDate(createdAt)}</p>
        <p className="detail-page__body">{body}</p>
        <div className="detail-page__action">
        </div>
    </section>
    )
}

DetailNotes.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}



export default DetailNotes;