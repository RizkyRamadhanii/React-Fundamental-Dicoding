import React from "react";
import Notes from "../Notes";
import NotesSearch from "../NotesSearch";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import {FiHome} from 'react-icons/fi';
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../../utils/network-data";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }
    return <ArchivePageNotes defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}


class ArchivePageNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            active: [],
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.unArchiveNote = this.unArchiveNote.bind(this);
    }

    async componentDidMount() {
        const { data } = await getArchivedNotes();
        this.setState(() => {
            return {
                notes: data
            }
        })
    }

    async onDeleteHandler(id) {
        await deleteNote(id);

        const { data } = await getArchivedNotes();
        this.setState(() => {
            return {
                notes: data,
            }
        })
    }
    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    async unArchiveNote(id) {
        await unarchiveNote(id);

        const { data } = await getArchivedNotes();
        this.setState(() => {
            return {
                notes: data,
            }
        })
    }



    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });
       
        return (
            <div className="app-container">
                <main>
                <h2>Catatan Arsip</h2>
                <NotesSearch keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <Notes notes = {notes} onDelete={this.onDeleteHandler} onArchive={this.unArchiveNote}/>
                </main>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/"><FiHome /></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default ArchivePageWrapper;