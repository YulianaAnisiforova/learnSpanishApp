import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {cardsActions} from '../../redux/cardsReducer'
import {useForm} from 'react-hook-form'
import {AppStateType} from '../../redux/store'

const NewWordForm = () => {
    const dispatch = useDispatch()

    const themes = useSelector((state: AppStateType) => state.cardsPage.themes)

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isValid,
        },
    } = useForm()

    const onAddCardBtn = (data: any) => {
        dispatch(cardsActions.addNewCardsAC(data.newWord, data.newTranslate, data.newTheme))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onAddCardBtn)}>
            <input type='text' placeholder={'add new word'}
                   {...register('newWord', {required: true,})} />
            <input type='text' placeholder={'add translation'}
                   {...register('newTranslate', {required: true,})} />
            <select defaultValue='defaultOption' {...register('newTheme', {required: true})}>
                <option value='defaultOption' disabled>Choose theme</option>
                {themes.map(theme => <option key={theme} value={theme} >{theme}</option>)}
            </select>
            <button type={'submit'} disabled={!isValid}>add</button>
        </form>
    )
}

export default NewWordForm