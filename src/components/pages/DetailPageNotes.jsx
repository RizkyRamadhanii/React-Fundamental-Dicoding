import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import DetailNotes from "../NotesDetail";
import { getNote } from "../../utils/network-data";
import { Link } from "react-router-dom";
import {FiHome, FiArchive} from 'react-icons/fi';

function NoteDetailPageWrapper() {
    const {id} = useParams();
    const navigate = useNavigate();
    return <DetailPageNotes id={id} navigate = {navigate} />;
}

class DetailPageNotes extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                notes: {},
                initializing: true,
            }
        }

        async componentDidMount() {
            const { data } = await getNote(this.props.id);
            this.setState(() => {
                return {
                    note: data,
                    initializing: false
                }
            });
        }

        render() {
            if (this.state.initializing) {
                return null;
            }

            if (this.state.note === undefined) {
                return (
                    <div className="app-container">
                    <p className="error">404 Pages! Not Found</p>
                    </div>
              
                );
            }
        
            return (
               <div className="app-container">
                <main>
                    <DetailNotes {...this.state.note} />
                </main>
                <section>                
                    <nav className="navigation">
                        <ul>
                            <li><Link to="/"><FiHome /></Link></li>
                            <li><Link to="/archive"><FiArchive /></Link></li>
                        </ul>
                    </nav>
                    </section>

                </div>
            )
        }
}

DetailPageNotes.propTypes = {
    id: PropTypes.string.isRequired,
}



export default NoteDetailPageWrapper;