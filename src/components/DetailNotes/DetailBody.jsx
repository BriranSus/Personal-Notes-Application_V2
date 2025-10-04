import parser from 'html-react-parser'

function DetailBody({ body }) {
    return (
        <div className="detail-page__body">{parser(body)}</div>
    )
}

export default DetailBody;