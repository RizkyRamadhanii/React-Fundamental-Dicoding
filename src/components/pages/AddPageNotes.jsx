import React from "react";
import { addNote } from "../../utils";
import NotesInput from "../NotesInput";
import HeaderApp from "../HeaderApp";
import { useNavigate } from "react-router-dom";

function AddPageNotes() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

    return (
        <div className="app-container">
            <HeaderApp/>
            <main>
            <h2>tambah Catatan</h2>
            <NotesInput addNote={onAddNoteHandler}/>
            </main>
        </div>
    )
}



export default AddPageNotes;