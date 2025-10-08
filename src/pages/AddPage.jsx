import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import Navbar from '../components/Navbar';
import NoteInput from '../components/AddNotes/NoteInput';

function AddPage() {
    const navigate = useNavigate();

    async function onAddNotesHandler({ title, body }){
        const { error } = await addNote({ title, body });
        if (!error){
            navigate('/');
        }else{
            alert('Gagal menambahkan catatan');
        }
    }

    return (
        <div className="app-container">
            <Navbar></Navbar>
            <NoteInput noteAdd={onAddNotesHandler}></NoteInput>
        </div>
    )
}

export default AddPage;