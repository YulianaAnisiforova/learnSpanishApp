import React from 'react'
import {useDispatch} from 'react-redux'
import {cardsActions} from '../../redux/cardsReducer'
import {useForm} from 'react-hook-form'
import style from './Wordlist.module.css'

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
            <div>
                If there is no topic you need among the existing ones, you can add a new one:
            </div>
            <br/>
            <div className={style.formBox}>
                <input type='text' placeholder={'new theme'} className={style.inputForm}
                       {...register('newThemeAdd', {required: true,})} />
                <button type={'submit'} disabled={!isValid} className={style.btn} >+</button>
            </div>
        </form>
    )
}

export default NewThemeForm