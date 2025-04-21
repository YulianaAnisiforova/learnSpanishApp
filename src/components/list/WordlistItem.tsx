import React from 'react'
import style from './Wordlist.module.css'
import {DeleteOutlined, StarOutlined} from '@ant-design/icons'

type WordlistItemPropsType = {
    cardID: number,
    cardTheme: string,
    cardWord: string,
    cardTranslate: string,
    onDeleteClick: (cardID: number) => void,
    isFavorite: boolean,
    setIsFavorite: (cardID: number) => void,
}

const WordlistItem: React.FC<WordlistItemPropsType> = (props) => {
    return (
        <div className={style.wordItem} >
            {props.cardWord} - {props.cardTranslate}
            <StarOutlined className={style.favIcon}
                style={{ color: props.isFavorite ? 'gold' : 'gray' }}
                onClick={() => props.setIsFavorite(props.cardID)}
            />
            <DeleteOutlined className={style.deleteIcon}
                            onClick={() => props.onDeleteClick(props.cardID)} />
        </div>
    )
}

export default WordlistItem