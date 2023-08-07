import React from "react";
import Notes from "../Notes";
import {  getAllNotes, deleteNote } from "../../utils";
import NotesSearch from "../NotesSearch";
import HeaderApp from "../HeaderApp";
import { useSearchParams } from "react-router-dom";
import Navigation from "../Navigation";
import PropTypes from "prop-types";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }
    return <HomePageNotes defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}


class HomePageNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);

    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id
            ? { ...note, archived: !note.archived } 
            : note)
        this.setState({ notes });
    }
   

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });
        const activeNotes = notes.filter((note) => {
            return note.archived === false
        });
        const archiveNotes = notes.filter((note) => {
            return note.archived === true
        })
        return (
           <div className="app-container">
            <HeaderApp/>
            <main>       
            <section>     
            <h2>Catatan Aktif</h2>
            <NotesSearch keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
            <Notes notes = {activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
            </section>
            <section>
            <h2>Arsip</h2>
            <Notes notes = {archiveNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} isArchive/>
            </section>
            </main>
            <Navigation className="toogle-theme"/>
        </div>
         
        )
    }
}

HomePageNotes.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func,

}

export default HomePageWrapper;