import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../redux/store'
import {cardsActions} from '../redux/cardsReducer'
import {useForm} from 'react-hook-form'

const Wordlist = () => {
    const cards = useSelector((state: AppStateType) => state.cardsPage.cards)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isValid,
        },
    } = useForm()

    const onAddBtn = (data: any) => {
        dispatch(cardsActions.addNewCardsAC(data.newWord, data.newTranslate, data.newTheme))
        reset()
    }

    return (
        <div>
            {cards.map(card => <div key={card.cardID}>
                {card.cardID}, {card.cardTheme}, {card.cardWord}, {card.cardTranslate}
            </div>)}

            <form onSubmit={handleSubmit(onAddBtn)}>
                <input type='text' placeholder={'add new word'}
                       {...register('newWord', {required: true,})} />
                <input type='text' placeholder={'add translation for the new word'}
                       {...register('newTranslate', {required: true,})} />
                <input type='text' placeholder={'add a theme for it'}
                       {...register('newTheme', {required: true,})} />
                <button type={'submit'} disabled={!isValid}>add</button>
            </form>
        </div>
    )
}

export default Wordlist