import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

function NoteInput({ noteAdd }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onTitleChangeEventHandler = (event) => {
        setTitle(event.target.value)
    }

    const onBodyChangeEventHandler = (event) => {
        setBody(event.target.innerHTML)
    }

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        
        noteAdd({ title, body })
        setTitle('')
        setBody('')
        event.target.querySelector('.add-new-page__input__body').innerHTML = '';
    }

    return (
        <main>
            <div className='add-new-page__input'>
                <form action="" onSubmit={onSubmitEventHandler}>
                        <input 
                    className='add-new-page__input__title'
                        placeholder="Tambahkan Catatan"
                        value={title}
                        onChange={onTitleChangeEventHandler}
                        required>
                    </input>
                    <div
                        className="add-new-page__input__body"
                        data-placeholder="Menurut pendapat saya ..."
                        contentEditable
                        onInput={onBodyChangeEventHandler}
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

export default NoteInput;