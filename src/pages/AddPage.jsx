import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import Navbar from '../components/Navbar';
import NoteInput from "../components/AddNotes/NoteInput";

function AddPage() {
    const navigate = useNavigate();

    function onAddNotesHandler({ title, body }){
        addNote({ title, body });
        navigate("/");
    }

    return (
        <div className="app-container">
            <Navbar></Navbar>
            <NoteInput noteAdd={onAddNotesHandler}></NoteInput>
        </div>
    )
}

export default AddPage;