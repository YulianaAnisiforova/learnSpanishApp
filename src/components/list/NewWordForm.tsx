import React from 'react'
import {useDispatch} from 'react-redux'
import {cardsActions} from '../../redux/cardsReducer'
import {useForm} from 'react-hook-form'

const NewWordForm = () => {
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
        <form onSubmit={handleSubmit(onAddBtn)}>
            <input type='text' placeholder={'add new word'}
                   {...register('newWord', {required: true,})} />
            <input type='text' placeholder={'add translation'}
                   {...register('newTranslate', {required: true,})} />
            <input type='text' placeholder={'add theme'}
                   {...register('newTheme', {required: true,})} />
            <button type={'submit'} disabled={!isValid}>add</button>
        </form>
    )
}

export default NewWordForm