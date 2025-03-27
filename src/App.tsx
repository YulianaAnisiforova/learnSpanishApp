import React from 'react'
import {NavLink, Routes, Route} from 'react-router-dom'
import Flashcards from './components/Flashcards'

function App() {
  return (
    <div>
      <NavLink to={'/cards'}>Flashcards</NavLink>

        <Routes>
            <Route path={'/cards'} element={<Flashcards />} />
        </Routes>
    </div>
  );
}

export default App
