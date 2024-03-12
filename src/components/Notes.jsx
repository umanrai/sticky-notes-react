import React, { useContext } from 'react'
import NoteWidget from './partials/NoteWidget'
import { GlobalContext } from '../context/GlobalState';

function Notes( { notes, deleteNote, updateNote } ) {

    // object/array destructuring
    // const { notes, deleteNote, updateNote } = useContext(GlobalContext);

    const handleClick = (noteId) => deleteNote(noteId)
    const handleUpdate = (note) => updateNote(note)

  return (
    <>
        { 
            notes && notes.length > 0 && notes.map(
              note => <NoteWidget 
                handleUpdate={handleUpdate} 
                handleDelete={handleClick}
                note={note} 
                key={note.id} />)
        }
    </>
  )
}

export default Notes
