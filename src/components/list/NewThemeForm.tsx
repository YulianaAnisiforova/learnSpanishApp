import React from 'react'
import {useDispatch} from 'react-redux'
import {cardsActions} from '../../redux/cardsReducer'
import {useForm} from 'react-hook-form'

const NewThemeForm = () => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isValid,
        }
    } = useForm()

    const onAddThemeBtn = (data: any) => {
        dispatch(cardsActions.addNewThemeAC(data.newThemeAdd))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onAddThemeBtn)}>
            <input type='text' placeholder={'add new theme'}
                   {...register('newThemeAdd', {required: true,})} />
            <button type={'submit'} disabled={!isValid}>add new theme</button>
        </form>
    )
}

export default NewThemeForm