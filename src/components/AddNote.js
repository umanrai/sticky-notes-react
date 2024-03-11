import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const NewNote = () => {
    const { addNote } = useContext(GlobalContext);

    const handleClick = () => addNote({ id: Math.floor(Math.random() * 100000), text: '' })

    return (
        <button onClick={handleClick} className="add-note">+</button>
    )
}

export default NewNote
