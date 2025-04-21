import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Wordlist from './components/list/Wordlist'
import FlashCards from './components/flashcards/FlashCards'
import StartPage from './components/startPage/StartPage'
import Header from './components/header/Header'

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<StartPage/>}/>
                <Route path={'/wordlist'} element={<Wordlist/>}/>
                <Route path={'/flashcards'} element={<FlashCards/>}/>
            </Routes>
        </div>
    )
}

export default App
