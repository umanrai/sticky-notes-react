import './App.css';
import Header from './components/Header';
import AddNote from './components/AddNote';
import Footer from './components/Footer';
import Notes from './components/Notes';
import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <Header />
      
      <div className='container'>
        <AddNote />
        <Notes/>
      </div>  

      <Footer />
    </GlobalProvider>
  );
}

export default App;
