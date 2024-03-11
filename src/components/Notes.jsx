import React, { useContext } from 'react'
import NoteWidget from './partials/NoteWidget'
import { GlobalContext } from '../context/GlobalState';

function Notes() {

    // object/array destructuring
    const { notes } = useContext(GlobalContext);

  return (
    <>
        { 
            notes && notes.length > 0 && notes.map(note => <NoteWidget note={note} key={note.id} />)
        }
    </>
  )
}

export default Notes
