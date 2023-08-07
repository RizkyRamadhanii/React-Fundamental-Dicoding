import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePageNotes from "./pages/HomePageNotes";
import AddPageNotes from "./pages/AddPageNotes";
import NoteDetailPageWrapper from "./pages/DetailPageNotes";

function ContactApp() {
    return (
        <div>
        <div>
            <Routes>   
            <Route path="/" element={<HomePageNotes />} />
            <Route path="/add" element={<AddPageNotes />} />
            <Route path="/notes/:id" element={<NoteDetailPageWrapper />} />
            </Routes>
        </div>
        </div>
    )
}
export default ContactApp;