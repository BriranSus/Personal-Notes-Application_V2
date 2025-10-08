import { getActiveNotes } from '../utils/network-data';
import Navbar from '../components/Navbar';
import NotesWrapper from '../components/HomeNotes/NotesWrapper'
import { FaPlus } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react'

function HomePage() {
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const keywordParam = searchParams.get('keyword') || '';
        setKeyword(keywordParam);
    }, [searchParams]);

    useEffect(() => {
        async function fetchNotes() {
        setLoading(true);
        const { error, data } = await getActiveNotes();

        if (!error) {
            setNotes(data);
            setLoading(false);
        } else {
            setError('Gagal memuat catatan');
            setLoading(false);
        }
        }

        fetchNotes();
    }, []);

    function onKeywordChangeHandler(newKeyword) {
        setKeyword(newKeyword);
        setSearchParams({ keyword: newKeyword });
    }

    const Notes = notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    if (loading) {
        return (
        <div className="app-container">
            <Navbar />
            <main>
            <h1>Catatan Aktif</h1>
            <p>Memuat catatan...</p>
            </main>
        </div>
        );
    }

    if (error) {
        return (
        <div className="app-container">
            <Navbar />
            <main>
            <h1>Catatan Aktif</h1>
            <p>{error}</p>
            </main>
        </div>
        );
    }

    return (
        <div className="app-container">
        <Navbar />
        <main>
            <h1>Catatan Aktif</h1>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <NotesWrapper notes={Notes} />
        </main>

        <div className="homepage__action">
            <button className="action">
            <Link to="/Notes/new">
                <FaPlus size={24} color="black" />
            </Link>
            </button>
        </div>
        </div>
    );
}

export default HomePage;