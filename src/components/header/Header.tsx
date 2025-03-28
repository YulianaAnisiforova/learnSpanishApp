import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.headerBox}>
            <div>
                <NavLink to={'/'} className={navData => navData.isActive ? style.active : style.link}
                    >Start page</NavLink>
            </div>
            <div>
                <NavLink to={'/wordlist'} className={navData => navData.isActive ? style.active : style.link}
                    >List of the words</NavLink>
            </div>
            <div>
                <NavLink to={'/flashcards'} className={navData => navData.isActive ? style.active : style.link}
                    >Flashcards</NavLink>
            </div>
        </div>
    )
}

export default Header