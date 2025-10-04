import { FaTrash } from 'react-icons/fa';

function DeleteButton({ id, onDelete }) {
    return (
        <button className="action" onClick={() => onDelete(id)}>
            <FaTrash></FaTrash>
        </button>    
    )
    
}

export default DeleteButton;