import { useParams } from 'react-router-dom';
import React from 'react';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import ItemDetail from '../components/DetailNotes/ItemDetail';
import Navbar from '../components/Navbar';
import DeleteButton from '../components/DeleteButton';
import { useNavigate } from 'react-router-dom';
import ArchiveButton from '../components/ArchiveButton';

function DetailPageWrapper(){
    const { id } = useParams();
    const navigate = useNavigate();
    return <DetailPage id={id} navigate={navigate}/>
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            noteDetail: getNote(props.id)
        }
        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onDeleteHandler(id){
        deleteNote(id);
        this.props.navigate("/");
    }

    onArchiveHandler(id){
        archiveNote(id);
        this.props.navigate("/");
    }

    onUnarchiveHandler(id){
        unarchiveNote(id);
        this.props.navigate("/");
    }

    render() {
        const { noteDetail } = this.state;

        if (!noteDetail){
            return <p>Note is not found</p>;
        }

        return (
            <div className='app-container'>
                <Navbar></Navbar>

                <main>
                    <ItemDetail {...noteDetail}/>    
                </main>

                <div className='detail-page__action'>
                    <button className='action'>
                        <ArchiveButton id={this.props.id} onArchive={this.onArchiveHandler} archived={this.state.noteDetail.archived} onUnarchive={this.onUnarchiveHandler}></ArchiveButton>
                    </button>
                    <button className='action' >
                        <DeleteButton id={this.props.id} onDelete={this.onDeleteHandler}></DeleteButton>
                    </button>
                </div>
                
            </div>
        )
    }

    
}

export default DetailPageWrapper;