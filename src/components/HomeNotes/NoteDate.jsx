import { showFormattedDate } from '../../utils'; 

function NoteDate({ createdAt }) {
    const date = showFormattedDate(createdAt)

    return (
        <p className="note-item__createdAt">{date}</p>
    )
}

export default NoteDate;