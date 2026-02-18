import { Outlet } from "react-router";
import "../app.css"
// import { useState } from 'react';
// import type { INotes } from '../components/UserNoteList';
import UserNoteList from '../components/UserNoteList';
// import Header from '../components/header';
// import { UserNoteInput } from "./UserNoteInput";

function App() {
 

  return (
    <>
      <div className='parentdiv'>
        <Outlet/>
        <UserNoteList />
      </div>
    </>
  )
}

export default App
