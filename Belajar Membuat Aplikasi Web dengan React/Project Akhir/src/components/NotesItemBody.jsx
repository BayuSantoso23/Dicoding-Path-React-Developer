import React from 'react';

function NotesItemBody({title, createdAt, body}){
    return (
        <div className="note-item__body">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__body ">{body}</p>
        </div>
    );
}

export default NotesItemBody;