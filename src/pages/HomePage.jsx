import React from 'react';
import { getAllNotes } from '../utils/local-data';
import Navbar from '../components/Navbar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
        }
    }
    
    render() {
        const { notes } = this.state;

        const notesList = notes.filter((note) => !note.archived)

        return (
            <div className='app-container'>
                <Navbar/>

                <main>
                    <h1>Catatan Aktif</h1>
                    <p>Search bar sementara</p>
                    <NotesWrapper notes={notesList}/>
                </main>  
            </div> 
        )
        
    }
}

export default HomePage;