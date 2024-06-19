import React from "react";
import Notes from "../Notes";
import NotesSearch from "../NotesSearch";
import { useSearchParams } from "react-router-dom";
import Navigation from "../Navigation";
import PropTypes from "prop-types";
import { getActiveNotes, deleteNote, archiveNote } from "../../utils/network-data";

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
            notes: [],
            archives: [],
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);

    }

    async onDeleteHandler(id) {
        await deleteNote(id);

        const { data } = await getActiveNotes();
        this.setState(() => {
            return {
                notes: data,
            }
        })
    }

    async componentDidMount() {
        const { data } = await getActiveNotes();
        
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

    async onArchiveHandler(id) {
        await archiveNote(id);

        const { data } = await getActiveNotes();
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
                    <section>     
                        <h2>Catatan Aktif</h2>
                        <NotesSearch keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                        <Notes notes = {notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
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