import NoteTitle from './NoteTitle';
import NoteBody from './NoteBody';
import NoteDate from './NoteDate';

function ItemNote({ id, title, body, createdAt }){
    return (
        <article className="note-item">
            <NoteTitle title={title} id={id}/>
            <NoteDate createdAt={createdAt}/>
            <NoteBody body={body}/>
        </article>
    )
}

export default ItemNote;