import React from 'react';
import { getArchivedNotes } from '../utils/network-data';
import Navbar from '../components/Navbar';
import NotesWrapper from '../components/HomeNotes/NotesWrapper'
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function ArchivePage() {
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
        async function fetchArchivedNotes() {
        setLoading(true);
        const { error, data } = await getArchivedNotes();

        if (!error) {
            setNotes(data);
            setLoading(false);
        } else {
            setError('Gagal memuat catatan arsip');
            setLoading(false);
        }
        }

        fetchArchivedNotes();
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
            <h1>Catatan Arsip</h1>
            <p>Memuat catatan arsip...</p>
            </main>
        </div>
        );
    }

    if (error) {
        return (
        <div className="app-container">
            <Navbar />
            <main>
            <h1>Catatan Arsip</h1>
            <p>{error}</p>
            </main>
        </div>
        );
    }

    return (
        <div className="app-container">
        <Navbar />
        <main>
            <h1>Catatan Arsip</h1>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <NotesWrapper notes={Notes} />
        </main>
        </div>
    );
}

export default ArchivePage;