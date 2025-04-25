import React, {FC} from 'react'
import {useDispatch} from 'react-redux'
import {cardsActions} from '../../redux/cardsReducer'
import {useForm} from 'react-hook-form'
import style from './Wordlist.module.css'
import {PlusOutlined} from '@ant-design/icons'

const NewThemeForm: FC<{ themes: string[] }> = ({themes}) => {
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
        if (themes.includes(data.newThemeAdd)) {
            alert('Theme title should be unique ;)')
            return
        }
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
                <button type={'submit'} disabled={!isValid} className={style.btn}><PlusOutlined/></button>
            </div>
        </form>
    )
}

export default NewThemeForm