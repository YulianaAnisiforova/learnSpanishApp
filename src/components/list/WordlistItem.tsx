import React from 'react'

type WordlistItemPropsType = {
    cardID: number,
    cardTheme: string,
    cardWord: string,
    cardTranslate: string,
}

const WordlistItem: React.FC<WordlistItemPropsType> = (props) => {
    return (
        <div>
            {props.cardID}, {props.cardTheme},
            {props.cardWord}, {props.cardTranslate}
        </div>
    )
}

export default WordlistItem