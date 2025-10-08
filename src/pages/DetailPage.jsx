import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import ItemDetail from '../components/DetailNotes/ItemDetail';
import Navbar from '../components/Navbar';
import DeleteButton from '../components/DeleteButton';
import ArchiveButton from '../components/ArchiveButton';

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [noteDetail, setNoteDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNoteDetail() {
        setLoading(true);
        const { error, data } = await getNote(id);

        if (!error) {
            setNoteDetail(data);
            setLoading(false);
        } else {
            setError('Gagal memuat detail catatan');
            setLoading(false);
        }
        }

        fetchNoteDetail();
    }, [id]);

    async function onDeleteHandler() {
        const confirmDelete = window.confirm('Apakah kamu yakin ingin menghapus catatan ini?');
        if (confirmDelete) {
        const { error } = await deleteNote(id);
        if (!error) {
            alert('Catatan berhasil dihapus');
            navigate('/');
        } else {
            alert('Gagal menghapus catatan');
        }
        }
    }

    async function onArchiveHandler() {
        const { error } = await archiveNote(id);
        if (!error) {
        alert('Catatan berhasil diarsipkan');
        navigate('/');
        } else {
        alert('Gagal mengarsipkan catatan');
        }
    }

    async function onUnarchiveHandler() {
        const { error } = await unarchiveNote(id);
        if (!error) {
        alert('Catatan berhasil dipindahkan dari arsip');
        navigate('/');
        } else {
        alert('Gagal memindahkan catatan');
        }
    }

    if (loading) {
        return (
        <div className="app-container">
            <Navbar />
            <main>
            <p>Memuat detail catatan...</p>
            </main>
        </div>
        );
    }

    if (error || !noteDetail) {
        return (
        <div className="app-container">
            <Navbar />
            <main>
            <p>{error || 'Catatan tidak ditemukan.'}</p>
            </main>
        </div>
        );
    }

    return (
        <div className="app-container">
        <Navbar />

        <main>
            <ItemDetail {...noteDetail} />
        </main>

        <div className="detail-page__action">
            <button className="action">
            <ArchiveButton
                id={id}
                onArchive={onArchiveHandler}
                onUnarchive={onUnarchiveHandler}
                archived={noteDetail.archived}
            />
            </button>
            <button className="action">
            <DeleteButton id={id} onDelete={onDeleteHandler} />
            </button>
        </div>
        </div>
    );
}

export default DetailPage;