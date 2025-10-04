import parser from 'html-react-parser'

function NoteBody({ body }) {
    return (
        <p className="note-item__body">{parser(body)}</p>
    )
}

export default NoteBody;