import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getNote } from "../../utils";
import DetailNotes from "../NotesDetail";
import HeaderApp from "../HeaderApp";

function NoteDetailPageWrapper() {
    const {id} = useParams();
    const navigate = useNavigate();
    return <DetailPageNotes id={id} navigate = {navigate} />;
}

class DetailPageNotes extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                notes: getNote(props.id),
            }
        }

        render() {
            if (this.state.notes === undefined) {
                return (
                    <div className="app-container">
                    <HeaderApp/>
                    <p className="error">404 Pages! Not Found</p>
                    </div>
              
                );
            }
        
            return (
               <div className="app-container">
                <HeaderApp/>
                <main>
                    <DetailNotes {...this.state.notes} />
                </main>
                </div>
            )
        }
}

  



export default NoteDetailPageWrapper;