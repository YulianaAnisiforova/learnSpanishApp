import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import style from './FlashCards.module.css'
import ThemeSelector from './ThemeSelector'

const FlashCards = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)
    const themes = useSelector((state: AppStateType) => state.cardsPage.themes)

    const themeOptions = ['all', ...themes]

    const [selectedTheme, setSelectedTheme] = useState<string>('all')
    const [index, setIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const filteredCards = selectedTheme === 'all'
        ? cards
        : cards.filter(card => card.cardTheme === selectedTheme)

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(event.target.value)
        setIndex(0)
        setIsFlipped(false)
    }

    const onPrev = () => {
        setIsFlipped(false)
        setIndex((currentIndex) =>
            currentIndex === 0 ? filteredCards.length - 1 : currentIndex - 1)
    }

    const onNext = () => {
        setIsFlipped(false)
        setIndex((currentIndex) =>
            currentIndex === filteredCards.length - 1 ? 0 : currentIndex + 1)
    }

    if (filteredCards.length === 0) {
        return (
            <div className={style.cardBox}>
                <div>
                    <ThemeSelector selectedTheme={selectedTheme}
                                   handleThemeChange={handleThemeChange}
                                   themes={themeOptions}/>
                    <div className={style.card}>
                        <span>No cards in this topic yet.</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={style.cardBox}>
            <div>
                <ThemeSelector selectedTheme={selectedTheme}
                               handleThemeChange={handleThemeChange}
                               themes={themeOptions}/>

                <div className={style.theme}>{filteredCards[index].cardTheme}</div>
                <div
                    className={`${style.card} ${isFlipped ? style.flipped : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <div className={style.cardFront}>
                        {filteredCards[index].cardWord}
                    </div>
                    <div className={style.cardBack}>
                        {filteredCards[index].cardTranslate}
                    </div>
                </div>
                <div className={style.btnBox}>
                    <button onClick={onPrev} className={style.btn}>prev</button>
                    <span> {index + 1} / {filteredCards.length} </span>
                    <button onClick={onNext} className={style.btn}>next</button>
                </div>
            </div>
        </div>
    )
}

export default FlashCards