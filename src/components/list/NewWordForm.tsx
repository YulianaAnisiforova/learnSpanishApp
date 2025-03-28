import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {cardsActions} from '../../redux/cardsReducer'
import {useForm} from 'react-hook-form'
import {AppStateType} from '../../redux/store'
import style from './Wordlist.module.css'

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
            <div>
                Add your own words below:
            </div>
            <br/>
            <div className={style.formBox}>
                <input type='text' placeholder={'new word'} className={style.inputForm}
                       {...register('newWord', {required: true,})} />
                <input type='text' placeholder={'translation'} className={style.inputForm}
                       {...register('newTranslate', {required: true,})} />
                <select defaultValue='defaultOption' className={style.chooseForm}
                        {...register('newTheme', {required: true})}>
                    <option value='defaultOption' disabled>Choose theme</option>
                    {themes.map(theme => <option key={theme} value={theme}>{theme}</option>)}
                </select>
                <button type={'submit'} disabled={!isValid} className={style.btn}>+</button>
            </div>
        </form>
    )
}

export default NewWordForm