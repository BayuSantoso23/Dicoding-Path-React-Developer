// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from './components/NotesApp';
import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);
