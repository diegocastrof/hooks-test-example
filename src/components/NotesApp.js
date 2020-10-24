import React, { useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes.reducer'

import NoteList from './NoteList'
import NoteForm from './NoteForm'

import NotesContext from '../context/notes-context'

const NotesApp = () => {  
  const [notes, dispatch] = useReducer(notesReducer, [])

  // LOCAL STORAGE - DATA PERSISTANCE
  // Read LS notes
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if (notes) {
      dispatch({
        type: 'POPULATE_NOTES',
        notes
      })
    }
  }, [])
  // Save to LS
  useEffect(() =>{
    saveNotes(notes)
  }, [notes])

  const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <NoteForm />
    </NotesContext.Provider>
  )
}

export default NotesApp