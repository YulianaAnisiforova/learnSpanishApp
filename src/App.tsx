import React from 'react'
import {NavLink, Routes, Route} from 'react-router-dom'
import Wordlist from './components/Wordlist'
import FlashCards from './components/FlashCards'

function App() {
    return (
        <div>
            <div>
                <NavLink to={'/wordlist'}>List of the words</NavLink>
            </div>
            <div>
                <NavLink to={'/flashcards'}>Flashcards</NavLink>
            </div>

            <Routes>
                <Route path={'/wordlist'} element={<Wordlist/>}/>
                <Route path={'/flashcards'} element={<FlashCards/>}/>
            </Routes>
        </div>
    );
}

export default App
