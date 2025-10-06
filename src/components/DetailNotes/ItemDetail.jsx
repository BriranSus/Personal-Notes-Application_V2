import DetailTitle from './DetailTitle';
import DetailDate from './DetailDate';
import DetailBody from './DetailBody';

function ItemDetail({ title, createdAt, body }) {
    return (
        <article className="detail-page">
            <DetailTitle title={title}/>
            <DetailDate createdAt={createdAt}/>
            <DetailBody body={body}/>
        </article>
    )
}

export default ItemDetail;