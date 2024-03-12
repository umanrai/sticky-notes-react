import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Header = ({ searchNotes }) => {


  // const filterNoteList = (event) => searchNotes(event.target.value)

  return (
    <div className="search-bar">
        <input className="search" onKeyUp={(event) => searchNotes(event.target.value)} placeholder="Search notes ..."/>
    </div>
  )
}

export default Header
