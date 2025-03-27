import React from 'react'
import {useSelector} from 'react-redux'
import {AppStateType} from "../redux/store";

const Flashcards = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)

    return (
        <div>
            {cards.map(card => <div key={card.cardID}>
                {card.cardID}, {card.cardTheme}, {card.cardText}
            </div>)}

            <input type="text" placeholder={'add new word'} />
            <button>add</button>
        </div>
    )
}

export default Flashcards