import React from 'react';
import { getAllNotes, getArchivedNotes } from '../utils/network-data';
import Navbar from '../components/Navbar';
import NotesWrapper from '../components/HomeNotes/NotesWrapper'
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword })
    }

    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword){
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }
    
    render() {

        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        })

        return (
            <div className='app-container'>
                <Navbar/>

                <main>
                    <h1>Catatan Arsip</h1>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                    <NotesWrapper notes={notes}/>
                </main>  
            </div> 
        )
        
    }
}

export default ArchivePageWrapper;