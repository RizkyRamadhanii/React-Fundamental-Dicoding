import React from "react";
import { addNote } from "../../utils/network-data";
import NotesInput from "../NotesInput";
import { useNavigate } from "react-router-dom";

function AddPageNotes() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

    return (
        <div className="app-container">
            <main>
            <h2>tambah Catatan</h2>
            <NotesInput addNote={onAddNoteHandler}/>
            </main>
        </div>
    )
}



export default AddPageNotes;