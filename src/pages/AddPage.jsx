import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import Navbar from '../components/Navbar';
import NoteInput from '../components/AddNotes/NoteInput';

function AddPage() {
    const navigate = useNavigate();

    // function onAddNotesHandler({ title, body }){
    //     addNote({ title, body });
    //     navigate("/");
    // }

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    

    async function onAddNotesHandler(note){
        const { error } = await addNote(note);
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