import React from 'react'
import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, text, date, handleDelteNote }) => {
    return (
        <div className='note'>
            <span>{text}</span>

            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' 
                onClick={() => handleDelteNote(id)}/>
            </div>
        </div>
    )
}

export default Note
