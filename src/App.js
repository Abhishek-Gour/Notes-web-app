import { useEffect, useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first note',
      date: '20/8/2023'
    },
    {
      id: nanoid(),
      text: 'this is my second note',
      date: '20/8/2023'
    },
    {
      id: nanoid(),
      text: 'this is my third note',
      date: '20/8/2023'
    },
    {
      id: nanoid(),
      text: 'this is my forth note',
      date: '20/8/2023'
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')) ?? [];
  // savedNotes.push(notes)
  useEffect(() => {
    if(savedNotes) {
      setNotes(savedNotes);
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  },[notes]);

  
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes} handleAddNote={addNote}
          handleDelteNote={deleteNote}
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} />
      </div>
    </div>
  );
}

export default App;
