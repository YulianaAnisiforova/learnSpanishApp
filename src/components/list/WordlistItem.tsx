import React from 'react'
import style from './Wordlist.module.css'

type WordlistItemPropsType = {
    cardID: number,
    cardTheme: string,
    cardWord: string,
    cardTranslate: string,
    onDeleteDoubleClick: (cardID: number) => void,
}

const WordlistItem: React.FC<WordlistItemPropsType> = (props) => {
    return (
        <div className={style.wordItem}
             onDoubleClick={() => props.onDeleteDoubleClick(props.cardID)}
        >
            {props.cardWord} - {props.cardTranslate}
        </div>
    )
}

export default WordlistItem