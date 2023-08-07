import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getAllNotes, deleteNote } from "../../utils";
import HeaderApp from "../HeaderApp";
import DetailNotes from "../NotesDetail"

function NoteDetailPageWrapper() {
    const {id} = useParams();
    const navigate = useNavigate();
    return <DetailPageNotes id={id} navigate = {navigate} />;
}

class DetailPageNotes extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                notes: getAllNotes(),
            }
            this.onDeleteHandler = this.onDeleteHandler.bind(this);
        }

        onDeleteHandler(id) {
            deleteNote(id);
    
            this.setState(() => {
                return {
                    notes: getAllNotes(),
                }
            });
        }

render() {
        return (
            <div>
            <HeaderApp/>
            <DetailNotes notes = {this.state.notes} onDelete={this.onDeleteHandler}/>
            </div>
        )
}
}

  



export default NoteDetailPageWrapper;