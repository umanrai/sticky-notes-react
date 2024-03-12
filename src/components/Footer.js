import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Footer = ({ url, name }) => {
  const { notes } = useContext(GlobalContext);

  return (
    <div className="footer">
            <span>
              Made with <span style={{padding: 0, color: '#ef0000'}}>❤</span> by 
              <a href={url} rel="noreferrer" target="_blank">{name}</a>
            </span>
            <span><b>Total Notes : </b> <span className="total-count">{notes.length}</span></span>
        </div>
  )
}

export default Footer
