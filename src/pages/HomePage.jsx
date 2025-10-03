import React from 'react';
import { getAllNotes, getActiveNotes } from '../utils/local-data';
import Navbar from '../components/Navbar';
import NotesWrapper from '../components/HomeNotes/NotesWrapper'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
        }
    }
    
    render() {

        return (
            <div className='app-container'>
                <Navbar/>

                <main>
                    <h1>Catatan Aktif</h1>
                    <p>Search bar sementara</p>
                    <NotesWrapper notes={this.state.notes}/>
                </main>  
            </div> 
        )
        
    }
}

export default HomePage;