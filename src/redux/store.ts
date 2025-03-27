import {combineReducers, createStore} from 'redux'
import cardsReducer from './cardsReducer'

let reducers = combineReducers({
    cardsPage: cardsReducer,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

type PropertiesTypes<T> = T extends {[key: string]:infer U} ? U : never
export type InferActionType<T extends {[key: string]:(...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

let store = createStore(reducers)

export default store