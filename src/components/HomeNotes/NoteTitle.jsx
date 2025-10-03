import { Link } from 'react-router-dom';

function NoteTitle({ title, id }) {
    return (
        <div className="note-item__title">
            <h3><Link to={`notes/${id}`}>{title}</Link></h3>
        </div>
    )
}

export default NoteTitle;