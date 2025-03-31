import React from 'react'
import style from './FlashCards.module.css'
import {CardType} from '../../types/types'

type FlashCardItemPropsType = {
    isFlipped: boolean,
    setIsFlipped: (bool: boolean) => void,
    index: number,
    currentCards: CardType[],
}

const FlashCardItem: React.FC<FlashCardItemPropsType> = (props) => {
    return (
        <div
           className={`${style.card} ${props.isFlipped ? style.flipped : ''}`}
           onClick={() => props.setIsFlipped(!props.isFlipped)} >
           <div className={style.cardFront}>
               {props.currentCards[props.index].cardWord}
           </div>
           <div className={style.cardBack}>
               {props.currentCards[props.index].cardTranslate}
           </div>
       </div>
    )
}

export default FlashCardItem