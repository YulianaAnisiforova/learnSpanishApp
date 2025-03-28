import {InferActionType} from './store'
import {CardType} from '../types/types'

let initialState = {
    cards: [
        {cardID: 1, cardTheme: 'la familia', cardWord: 'la madre', cardTranslate: 'mother'},
        {cardID: 2, cardTheme: 'la familia', cardWord: 'el padre', cardTranslate: 'father'},
        {cardID: 3, cardTheme: 'la familia', cardWord: 'la hermana', cardTranslate: 'sister'},
        {cardID: 4, cardTheme: 'la familia', cardWord: 'el abuelo', cardTranslate: 'grandfather'},
        {cardID: 5, cardTheme: 'la casa', cardWord: 'la mesa', cardTranslate: 'table'},
        {cardID: 6, cardTheme: 'la casa', cardWord: 'la cama', cardTranslate: 'bed'},
        {cardID: 7, cardTheme: 'el caracter', cardWord: 'bueno', cardTranslate: 'good'},
        {cardID: 8, cardTheme: 'el caracter', cardWord: 'malo', cardTranslate: 'bad'},
        {cardID: 9, cardTheme: 'la comida', cardWord: 'la naranja', cardTranslate: 'orange'},
    ] as CardType[],
    themes: ['la familia', 'la casa', 'el caracter', 'la comida'] as string[],
}

type InitialStateType = typeof initialState
type ActionType = InferActionType<typeof cardsActions>

const cardsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        // case 'SET_CARDS':
        //     return {
        //         ... state,
        //         ...action.cards,
        //     }
        case 'ADD_NEW_CARD':
            return {
                ... state,
                cards: [...state.cards,
                    {cardID: state.cards.length+1, cardTheme: action.payload.newTheme,
                    cardTranslate: action.payload.newTranslate, cardWord:action.payload.newWord}, ],
            }
        case 'ADD_NEW_THEME':
            return {
                ... state,
                themes: [...state.themes, action.newThemeAdd],
            }
        default:
            return state
    }
}

export const cardsActions = {
    // setCardsAC: (cards: CardType[]) => ({type: 'SET_CARDS', cards} as const),
    addNewCardsAC: (newWord: string, newTranslate: string, newTheme: string) =>
        ({type: 'ADD_NEW_CARD', payload: {newWord, newTheme, newTranslate}} as const),
    addNewThemeAC: (newThemeAdd: string) =>
        ({type: 'ADD_NEW_THEME', newThemeAdd} as const),
}

export default cardsReducer