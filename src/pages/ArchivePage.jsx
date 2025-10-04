import React from 'react';
import { getAllNotes, getArchivedNotes } from '../utils/local-data';
import Navbar from '../components/Navbar';
import NotesWrapper from '../components/HomeNotes/NotesWrapper'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
        }
    }
    
    render() {

        return (
            <div className='app-container'>
                <Navbar/>

                <main>
                    <h1>Catatan Arsip</h1>
                    <p>Search bar sementara</p>
                    <NotesWrapper notes={this.state.notes}/>
                </main>  

                <div className='homepage__action'>
                    <button className='action'>
                        <Link to="/Notes/new"><FaPlus size={24} color="black"/></Link>
                    </button>
                </div>
            </div> 
        )
        
    }
}

export default ArchivePage;