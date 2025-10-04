import { useParams } from 'react-router-dom';
import React from 'react';
import { getNote } from '../utils/local-data';
import ItemDetail from '../components/DetailNotes/ItemDetail';
import Navbar from '../components/Navbar';

function DetailPageWrapper(){
    const { id } = useParams();
    return <DetailPage id={id}/>
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            noteDetail: getNote(props.id)
        }
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
                
            </div>
        )
    }

    
}

export default DetailPageWrapper;