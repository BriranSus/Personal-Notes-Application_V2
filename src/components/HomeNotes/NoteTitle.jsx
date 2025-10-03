function NoteTitle({ title, id }) {
    return (
        <div className="note-item__title">
            <ul>
                <li><Link to={`notes/:${id}`}>{title}</Link></li>
            </ul>
        </div>
    )
}

export default NoteTitle;