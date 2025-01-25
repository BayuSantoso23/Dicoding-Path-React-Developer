import React from 'react';
import NotesList from './NotesList.jsx';
import { getInitialData, showFormattedDate } from '../utils/index.js';
import NoteInput from './NotesInput.jsx';
 
class NoteApp extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     notes: getInitialData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(notes => notes.id !== id);
   this.setState({ notes });
 }

 onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            creeatedAt: showFormattedDate(new Date()),
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="Note-app">
        <h1>Aplikasi Note</h1>
        <h2>Add Note</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Notes List</h2>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
  
} 
export default NoteApp;