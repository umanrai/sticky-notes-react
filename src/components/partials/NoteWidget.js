import React, { useState } from 'react'

// Props destructuring
function NoteWidget({ note, handleDelete, handleUpdate }) {

  const [text, setText] = useState(note.text);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText); // Update the local state with the new text
    handleUpdate({ ...note, text: newText }); // Pass the updated note to handleUpdate
  };

  const removeNote = function() {
    const confirmation = window.confirm('Are you sure you want to delete?');
    if(confirmation){
      handleDelete(note.id)
    } 
  }

  return (
    <div style={{ position: 'relative' }}>
      <textarea placeholder="Empty Sticky Note"
      onChange={handleChange}
      className="note" id={`note-${note.id}`} cols="20" rows="10" 
      defaultValue={text}></textarea>
      <button
        onClick={() => removeNote()}
        title='Delete this note.'
        className='btn-note-remove'
      >
        X
      </button>
    </div>
  )
}

export default NoteWidget
