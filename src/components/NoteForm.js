import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

export default function NoteForm() {
  const { dispatch } = useContext(NotesContext)
  
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(title, body)
    setTitle('')
    setBody('')
  }

  const addNote = (title, body) => {
    return dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
  }
  return (
    <div>
      <form>
        <input 
          type="text"
          value={ title }
          onChange={ (e) => setTitle(e.target.value)}
        />
        <br/>
        <textarea
          value= { body }
          onChange={ (e) => setBody(e.target.value)} 
          cols="30" 
          rows="10">
        </textarea>
        <button onClick={ handleSubmit }>Submit Form</button>
      </form>
    </div>
  )
}
