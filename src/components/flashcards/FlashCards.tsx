import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import style from './FlashCards.module.css'
import ThemeSelector from './ThemeSelector'
import {CloseOutlined, LeftOutlined, RetweetOutlined, RightOutlined, StarOutlined} from '@ant-design/icons'
import {CardType} from '../../types/types'
import FlashCardItem from './FlashCardItem'
import {cardsActions} from '../../redux/cardsReducer'

const FlashCards = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)
    const themes = useSelector((state: AppStateType) => state.cardsPage.themes)

    const themeOptions = ['all', 'favorites', ...themes]

    const [selectedTheme, setSelectedTheme] = useState<string>('all')
    const [index, setIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const dispatch = useDispatch()

    const filteredCards = selectedTheme === 'all'
        ? cards
        : (
            selectedTheme === 'favorites'
            ? cards.filter(card => card.isFavorite)
            : cards.filter(card => card.cardTheme === selectedTheme)
        )

    const [currentCards, setCurrentCards] = useState([...filteredCards])

    useEffect(() => {
        setCurrentCards(filteredCards)
    }, [selectedTheme, cards])

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

    if (currentCards.length === 0) {
        return (
            <div className={style.cardBox}>
                <div>
                    <ThemeSelector selectedTheme={selectedTheme}
                                   handleThemeChange={handleThemeChange}
                                   themes={themeOptions}/>
                    <div className={style.card}>
                        <span>No cards yet. Add some!</span>
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
                    <FlashCardItem isFlipped={isFlipped}
                                   index={index}
                                   currentCards={currentCards}
                                   setIsFlipped={setIsFlipped}
                    />

                    <div className={style.repeatBtnBox}>
                        <button className={style.btn}
                                onClick={() => dispatch(cardsActions.setIsFavoriteAC(currentCards[index].cardID))}>
                            <StarOutlined style={{ color: currentCards[index].isFavorite ? 'gold' : 'gray' }} />
                        </button>
                        <button className={style.btn}
                                onClick={() => onSkipWord(currentCards[index].cardID, currentCards)}>
                            <CloseOutlined />
                        </button>
                        <button className={style.btn}
                                onClick={onNext}>
                            <RetweetOutlined />
                        </button>
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