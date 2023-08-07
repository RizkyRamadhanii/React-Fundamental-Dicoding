import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NotesDetail from "../NotesDetail";
import { getAllNotes, deleteNote } from "../../utils";

function NoteDetailPageWrapper() {
    const {id} = useParams();
    const navigate = useNavigate();
    return <NotePageDetail id={id} navigate = {navigate} />;
}

class NotePageDetail extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            note:null,
            initializing: true,
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    async componentDidMount() {
        const {data} = await getAllNotes(this.props.id);

        this.setState(() => {
            return {
                note:data,
                initializing: false,
            };
        });
    }

    async onDeleteHandler(id) {
        await deleteNote(id);
        this.props.navigate('/');

    }

    render() {
        return (
            <section>
                <NotesDetail {...this.state.note} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

export default NoteDetailPageWrapper;