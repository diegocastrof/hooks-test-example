import React, { useContext } from 'react'
import NotesContext from '../context/notes-context'

export default function Note({ note }) {
  const { dispatch } = useContext(NotesContext)

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title
    })
  }
  
  return (
    <div>
        <h4>{ note.title }</h4>
        <p>{ note.body }</p>
        <button onClick={ () => removeNote(note.title) }>x</button>
    </div>
  )
}
