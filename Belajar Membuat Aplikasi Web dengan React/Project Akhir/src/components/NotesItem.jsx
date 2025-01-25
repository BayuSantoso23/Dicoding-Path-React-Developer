import React from "react";
import NotesItemBody from './NotesItemBody.jsx';
import DeleteButton from './DeleteButton.jsx';

function ContactItem({title, body, id, createdAt, onDelete}){
    return(
        <div className="note-item">
            <NotesItemBody title={title} body={body} createdAt={createdAt} />
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default ContactItem;