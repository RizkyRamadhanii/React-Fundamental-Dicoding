import React from "react";
import PropTypes from 'prop-types';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
            title: event.target.value.slice(0, this.state.charLimit)
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
        return {
            body: event.target.value
        }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const charLimit = 50;
        return (
            <form  className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2 className="note-input-title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter : {charLimit-this.state.title.length}</p>
                <input type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea className="note-input__body" placeholder="Tuliskan Catatanmu Disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

NotesInput.propTypes = {
    addNote:PropTypes.func.isRequired,
}

export default NotesInput;