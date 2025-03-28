import React from 'react'
import style from './Wordlist.module.css'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import NewWordForm from './NewWordForm'
import WordlistItem from './WordlistItem'
import NewThemeForm from './NewThemeForm'

const Wordlist = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)

    return (
        <div className={style.wordlistBox}>
            <br/>
            <div className={style.listBox}>
                {cards.map(card =>
                    <WordlistItem key={card.cardID}
                                  cardID={card.cardID}
                                  cardTheme={card.cardTheme}
                                  cardWord={card.cardWord}
                                  cardTranslate={card.cardTranslate}
                    />)}
            </div>
            <br/>
            <NewWordForm/>
            <br/>
            <NewThemeForm/>
        </div>
    )
}

export default Wordlist