import React from 'react'
import style from './Wordlist.module.css'
import { DeleteOutlined } from '@ant-design/icons'

type WordlistItemPropsType = {
    cardID: number,
    cardTheme: string,
    cardWord: string,
    cardTranslate: string,
    onDeleteClick: (cardID: number) => void,
}

const WordlistItem: React.FC<WordlistItemPropsType> = (props) => {
    return (
        <div className={style.wordItem} >
            {props.cardWord} - {props.cardTranslate}
            <DeleteOutlined className={style.deleteIcon}
                            onClick={() => props.onDeleteClick(props.cardID)} />
        </div>
    )
}

export default WordlistItem