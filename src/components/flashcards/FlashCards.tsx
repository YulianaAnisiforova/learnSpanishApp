import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import style from './FlashCards.module.css'
import ThemeSelector from './ThemeSelector'
import {CloseOutlined, LeftOutlined, RetweetOutlined, RightOutlined} from '@ant-design/icons'
import {CardType} from '../../types/types'

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

    const [currentCards, setCurrentCards] = useState([...filteredCards])

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(event.target.value)
        setIndex(0)
        setIsFlipped(false)
    }

    const onPrev = () => {
        setIsFlipped(false)
        setIndex((currentIndex) =>
            currentIndex === 0 ? currentCards.length - 1 : currentIndex - 1)
    }

    const onNext = () => {
        setIsFlipped(false)
        setIndex((currentIndex) =>
            currentIndex === currentCards.length - 1 ? 0 : currentIndex + 1)
    }

    const onSkipWord = (cardID: number, currentCards: CardType[]) => {
        setIsFlipped(false)
        if (index >= currentCards.length - 1) {
            setIndex(Math.max(0, currentCards.length - 2));
        }

        const updatedCards = currentCards.filter(card => card.cardID !== cardID)
        setCurrentCards(updatedCards)
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

                <div className={style.theme}>{currentCards[index].cardTheme}</div>

                <div className={style.cardAndRepeatBtnBox}>
                <div
                    className={`${style.card} ${isFlipped ? style.flipped : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <div className={style.cardFront}>
                        {currentCards[index].cardWord}
                    </div>
                    <div className={style.cardBack}>
                        {currentCards[index].cardTranslate}
                    </div>
                </div>

                <div className={style.repeatBtnBox}>
                    <button className={style.btn} onClick={() => onSkipWord(currentCards[index].cardID, currentCards)}><CloseOutlined /></button>
                    <button className={style.btn} onClick={onNext}><RetweetOutlined /></button>
                </div>
                </div>

                <div className={style.btnBox}>
                    <button onClick={onPrev} className={style.btn}><LeftOutlined /></button>
                    <span> {index + 1} / {currentCards.length} </span>
                    <button onClick={onNext} className={style.btn}><RightOutlined /></button>
                </div>
            </div>
        </div>
    )
}

export default FlashCards