import React from 'react'

function NoteWidget({ note }) {
  return (
    <textarea placeholder="Empty Sticky Note" 
      className="note" id={`note-${note.id}`} cols="30" rows="10" 
      defaultValue={note.text}></textarea>
  )
}

export default NoteWidget
