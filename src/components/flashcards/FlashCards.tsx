import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import style from './FlashCards.module.css'

const FlashCards = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)

    const [index, setIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const onPrev = () => {
        setIsFlipped(false)
        setIndex((currentIndex) =>
            currentIndex === 0 ? cards.length - 1 : currentIndex - 1)
    }

    const onNext = () => {
        setIsFlipped(false)
        setIndex((currentIndex) =>
            currentIndex === cards.length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className={style.cardBox}>
            <div>
                {!isFlipped &&
                    <div className={style.card}
                         onClick={() => setIsFlipped(!isFlipped)}>
                        {cards[index].cardWord}
                    </div>
                }

                {isFlipped &&
                    <div className={style.card}
                         onClick={() => setIsFlipped(!isFlipped)}>
                        {cards[index].cardTranslate}
                    </div>}

                <div className={style.btnBox}>
                    <button onClick={onPrev} className={style.btn}>prev</button>
                    <span> {index + 1} / {cards.length} </span>
                    <button onClick={onNext} className={style.btn}>next</button>
                </div>
            </div>
        </div>
    )
}

export default FlashCards
