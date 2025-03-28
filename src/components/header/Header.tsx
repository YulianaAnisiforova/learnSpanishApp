import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.headerBox}>
            <div>
                <NavLink to={'/'}>Start page</NavLink>
            </div>
            <div>
                <NavLink to={'/wordlist'}>List of the words</NavLink>
            </div>
            <div>
                <NavLink to={'/flashcards'}>Flashcards</NavLink>
            </div>
        </div>
    )
}

export default Header