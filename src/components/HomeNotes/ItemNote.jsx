function ItemNote({ id, title, body, createdAt }){
    return (
        <div className="note-item">
            <NoteTitle title={title} id={id}/>
            <NoteDate createdAt={createdAt}/>
            <NoteBody body={body}/>
            Note
        </div>
    )
}

export default ItemNote;