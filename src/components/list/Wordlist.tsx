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

    const [editingTitle, setEditingTitle] = useState<string | null>(null)

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

    const activateEditMode = (title: string) => {
        setEditingTitle(title)
    }

    const deactivateEditMode = () => {
        if (editingTitle) {
            setEditingTitle(null)
        }
    }

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const titleExists = themes.some(theme =>
            theme === event.currentTarget.value && theme !== editingTitle
        )

        if (titleExists) {
            alert('Theme title should be unique ;)')
            return
        }

        dispatch(cardsActions.changeTitleAC(event.currentTarget.value, editingTitle))
        setEditingTitle(event.currentTarget.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.currentTarget.blur()
        }
    }

    return (
        <div className={style.wordlistBox}>
            {groupedCards.map(group => (
                <div key={group.theme}>
                    <div className={style.titleBox}>
                        {editingTitle === group.theme
                            ? <input className={style.changeTitle}
                                     onBlur={deactivateEditMode}
                                     autoFocus
                                     value={group.theme}
                                     onChange={onTitleChange}
                                     onKeyDown={handleKeyDown}
                            />
                            : <div className={style.themeTitle}>
                                <span onDoubleClick={() => activateEditMode(group.theme)}>
                                    {group.theme}
                                </span>
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
                                          isFavorite={card.isFavorite}
                                          setIsFavorite={() => dispatch(cardsActions.setIsFavoriteAC(card.cardID))}
                            />
                        )}
                    </div>
                </div>
            ))}

            <br/>
            <NewWordForm/>
            <br/>
            <NewThemeForm themes={themes}/>
        </div>
    )
}

export default Wordlist