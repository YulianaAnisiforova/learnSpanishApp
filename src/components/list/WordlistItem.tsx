import React from 'react'
import style from './Wordlist.module.css'

type WordlistItemPropsType = {
    cardID: number,
    cardTheme: string,
    cardWord: string,
    cardTranslate: string,
}

const WordlistItem: React.FC<WordlistItemPropsType> = (props) => {
    return (
        <div className={style.wordItem}>
            {props.cardID}. {props.cardTheme}: {props.cardWord}, {props.cardTranslate}
        </div>
    )
}

export default WordlistItem