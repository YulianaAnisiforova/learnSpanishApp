import React from 'react'
import style from './Wordlist.module.css'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import NewWordForm from './NewWordForm'
import WordlistItem from './WordlistItem'
import NewThemeForm from './NewThemeForm'

const Wordlist = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)
    const themes = useSelector((state: AppStateType) => state.cardsPage.themes)

    const groupedCards = themes.map(theme => ({
        theme,
        cards: cards.filter(card => card.cardTheme === theme)
    }));

    return (
        <div className={style.wordlistBox}>
            {groupedCards.map(group => (
                <div key={group.theme} className={style.groupBox}>
                    <div className={style.themeTitle}>{group.theme}</div>
                        <div className={style.listBox}>
                            {group.cards.map(card =>
                                <WordlistItem key={card.cardID}
                                              cardID={card.cardID}
                                              cardTheme={card.cardTheme}
                                              cardWord={card.cardWord}
                                              cardTranslate={card.cardTranslate}
                                />)}
                        </div>
                </div>
            ))}

            <br/>
            <NewWordForm/>
            <br/>
            <NewThemeForm/>
        </div>
    )
}

export default Wordlist