import React from 'react'
import style from './Wordlist.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import NewWordForm from './NewWordForm'
import WordlistItem from './WordlistItem'
import NewThemeForm from './NewThemeForm'
import {cardsActions} from '../../redux/cardsReducer'
import {CopyOutlined} from '@ant-design/icons'

const Wordlist = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)
    const themes = useSelector((state: AppStateType) => state.cardsPage.themes)
    const dispatch = useDispatch()

    const groupedCards = themes.map(theme => ({
        theme,
        cards: cards.filter(card => card.cardTheme === theme)
    }));

    const onDeleteDoubleClick = (cardID: number) => {
        dispatch(cardsActions.deleteWordAC(cardID))
    }

    const onCopyClick = (theme: string) => {
        dispatch(cardsActions.copyListAC(theme))
    }

    return (
        <div className={style.wordlistBox}>
            {groupedCards.map(group => (
                <div key={group.theme}>
                    <div className={style.themeTitle}>{group.theme}
                        <CopyOutlined className={style.copyIcon}
                        onClick={() => onCopyClick(group.theme)} />
                    </div>
                        <div className={style.listBox}>
                            {group.cards.map(card =>
                                <WordlistItem key={card.cardID}
                                              cardID={card.cardID}
                                              cardTheme={card.cardTheme}
                                              cardWord={card.cardWord}
                                              cardTranslate={card.cardTranslate}
                                              onDeleteDoubleClick={onDeleteDoubleClick}
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