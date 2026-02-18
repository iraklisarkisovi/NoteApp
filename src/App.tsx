import {UserNoteInput} from './components/UserNoteInput'
import "./app.css"
import { useState } from 'react';
import type { INotes } from './components/UserNoteList';
import UserNoteList from './components/UserNoteList';
import Header from './components/header';

function App() {
    const [modal, setModal] = useState<boolean>(true);
    const [notes, setNotes] = useState<INotes[]>([]);
    const [note, setNote] = useState<INotes>({
        author: "",
        note: "",
        rating: 0
    });

    const onChange = (input: string, type: "author" | "note") => {
        setNote((prev) => ({ ...prev, [type]: input }));
    };

    const CloseModal = () => {
      setModal((prev) => !prev)
      console.log(modal);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        
        setNotes((prev) => [...prev, note]);

        setNote({ author: "", note: "", rating: 0 });
    };

  return (
    <>
      <UserNoteInput submit={handleSubmit} change={onChange} note={note} CloseModal={CloseModal} modal={modal}/>

      <div className='parentdiv'>
      <Header CloseModal={CloseModal}/>

        <UserNoteList notes={notes} />
      </div>
    </>
  )
}

export default App
