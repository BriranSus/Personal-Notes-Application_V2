import React from 'react';
import { showFormattedDate } from '../../utils';
import { FaCheck } from 'react-icons/fa';

class NoteInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            title: '',
            body: '',
            archived: '',
            createdAt: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        const { title, body } = this.state;
        this.props.noteAdd({ title, body });
        this.setState({
            id: '',
            title: '',
            body: '',
            archived: '',
            createdAt: '',
        });
    }

    render() {
        return (
            <main>
                <div className='add-new-page__input'>
                    <form action="" onSubmit={this.onSubmitEventHandler}>
                        <input 
                            className='add-new-page__input__title'
                            placeholder="Tambahkan Catatan"
                            value={this.state.title}
                            onChange={this.onTitleChangeEventHandler}
                            required>
                        </input>
                        <div
                            className="add-new-page__input__body"
                            data-placeholder="Menurut pendapat saya ..."
                            contentEditable
                            onInput={this.onBodyChangeEventHandler}
                        />    
                        <div className='add-new-page__action'>
                            <button type="submit" className='action'>
                                <FaCheck></FaCheck>
                            </button>    
                        </div>     
                    </form>
                </div>      
            </main>
        )
    }
}

export default NoteInput;