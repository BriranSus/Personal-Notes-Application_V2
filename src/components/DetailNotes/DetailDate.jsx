import { showFormattedDate } from "../../utils";

function DetailDate({ createdAt }){
    const date = showFormattedDate(createdAt)

    return (
        <p className="detail-page__createdAt">{date}</p>
    )
}

export default DetailDate;