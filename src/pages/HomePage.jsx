import React from 'react';
import { getActiveNotes } from '../utils/local-data';
import Navbar from '../components/Navbar';
import NotesWrapper from '../components/HomeNotes/NotesWrapper'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword })
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
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
                    <h1>Catatan Aktif</h1>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                    <NotesWrapper notes={notes}/>
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

export default HomePageWrapper;