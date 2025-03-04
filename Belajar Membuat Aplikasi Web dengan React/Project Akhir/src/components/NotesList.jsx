import NotesItem from './NotesItem';

function NotesList({notes, onDelete}){
    return(
        <div className="contact-list">
            {
                notes.map((note) => (
                    <NotesItem 
                    key={note.id}
                    id={note.id} 
                    onDelete={onDelete}
                    {...note} />
                ))
            }
        </div>
    );
}

export default NotesList;