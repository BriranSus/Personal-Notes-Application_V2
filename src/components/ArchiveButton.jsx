import { FaUpload } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';

function ArchiveButton({ id, onArchive, archived, onUnarchive }) {
    return (
        <>
            <div>
                <button className="action" onClick={() => {
                    archived ? onUnarchive(id) : onArchive(id)
                }}>
                    {archived ? <FaUpload /> : <FaDownload /> }
                </button>
            </div>
        </>
    )
}

export default ArchiveButton;