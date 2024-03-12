import './App.css';
import Header from './components/Header';
import AddNote from './components/AddNote';
import Footer from './components/Footer';
import Notes from './components/Notes';
import { GlobalContext, GlobalProvider } from './context/GlobalState';
import { useContext, useState } from 'react';

function App() {

  const { notes, deleteNote, updateNote } = useContext(GlobalContext);

  const [ filteredNotes, setFilteredNotes ] = useState([])
  const [ searchKey, setSearchKey ] = useState(null)

  const searchNotes = (searchTerm) => {
    
    setFilteredNotes(
      notes.filter( note => note.text.toLowerCase().includes(searchTerm.toLowerCase()) )
    )

    setSearchKey(searchTerm)

  }

  return (
    <>
        <Header searchNotes={searchNotes} />
        
        <div className='container'>
          <AddNote />
          <Notes 
            deleteNote={deleteNote} 
            updateNote={updateNote} notes={searchKey ? filteredNotes : notes} />
        </div>  

        <Footer url="https://github.com/umanrai" name="@umanrai" />
      </>
  );
}

const AppWithProvider = () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};

export default AppWithProvider;