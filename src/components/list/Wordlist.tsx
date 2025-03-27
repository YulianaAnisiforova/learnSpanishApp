import React from 'react'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import NewWordForm from './NewWordForm'
import WordlistItem from './WordlistItem'

const Wordlist = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)

    return (
        <div>
            {cards.map(card =>
                <WordlistItem key={card.cardID}
                              cardID={card.cardID}
                              cardTheme={card.cardTheme}
                              cardWord={card.cardWord}
                              cardTranslate={card.cardTranslate}
                />)}

            <NewWordForm/>
        </div>
    )
}

export default Wordlist