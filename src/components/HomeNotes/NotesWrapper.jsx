function NotesWrapper({ notes }) {
    const notesCount = notes.length

    return (
        <>
            {
                (notesCount != 0) ? 
                <div className="notes-list">
                    {
                        notes.map((note) => {
                            <ItemNote key={note.id} id={note.id} {...note}/>
                        })
                    }
                </div> : 
                <div className="notes-list-empty">
                    <p>There is no notes</p>    
                </div>
                
            }
        </>   
    )
}

export default NotesWrapper;