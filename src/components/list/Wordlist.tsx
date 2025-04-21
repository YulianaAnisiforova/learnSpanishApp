import React, {useState} from 'react'
import style from './Wordlist.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../redux/store'
import NewWordForm from './NewWordForm'
import WordlistItem from './WordlistItem'
import NewThemeForm from './NewThemeForm'
import {cardsActions} from '../../redux/cardsReducer'
import {CopyOutlined, DeleteOutlined} from '@ant-design/icons'

const Wordlist = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)
    const themes = useSelector((state: AppStateType) => state.cardsPage.themes)
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)

    const groupedCards = themes.map(theme => ({
        theme,
        cards: cards.filter(card => card.cardTheme === theme)
    }));

    const onDeleteClick = (cardID: number) => {
        dispatch(cardsActions.deleteWordAC(cardID))
    }

    const onCopyClick = (theme: string) => {
        dispatch(cardsActions.copyListAC(theme))
    }

    const onDeleteListClick = (theme: string) => {
        dispatch(cardsActions.deleteListAC(theme))
    }

    const activateEditMode = () => {
        setIsEditing(true)
    }

    const deactivateEditMode = () => {
        setIsEditing(false)
    }

    return (
        <div className={style.wordlistBox}>
            {groupedCards.map(group => (
                <div key={group.theme}>
                    <div className={style.titleBox}>
                        {isEditing
                            ? <input className={style.changeTitle} onBlur={deactivateEditMode} autoFocus/>
                            : <div className={style.themeTitle}
                                   onDoubleClick={activateEditMode}>
                                {group.theme}
                                <CopyOutlined className={style.copyIcon}
                                              onClick={() => onCopyClick(group.theme)}/>
                                <DeleteOutlined className={style.deleteListIcon}
                                                onClick={() => onDeleteListClick(group.theme)}/>
                            </div>
                        }
                    </div>
                    <div className={style.listBox}>
                        {group.cards.map(card =>
                            <WordlistItem key={card.cardID}
                                          cardID={card.cardID}
                                          cardTheme={card.cardTheme}
                                          cardWord={card.cardWord}
                                          cardTranslate={card.cardTranslate}
                                          onDeleteClick={onDeleteClick}
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