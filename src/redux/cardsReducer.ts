import {InferActionType} from './store'

type CardType = {
    cardID: number,
    cardTheme: string,
    cardWord: string,
    cardTranslate: string,
}

let initialState = {
    cards: [
        {cardID: 1, cardTheme: 'la familia', cardWord: 'la madre', cardTranslate: 'mother'},
        {cardID: 2, cardTheme: 'la familia', cardWord: 'el padre', cardTranslate: 'father'},
        {cardID: 3, cardTheme: 'la familia', cardWord: 'la hermana', cardTranslate: 'sister'},
        {cardID: 4, cardTheme: 'la familia', cardWord: 'el abuelo', cardTranslate: 'grandfather'},
    ] as CardType[],
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
        default:
            return state
    }
}

export const cardsActions = {
    // setCardsAC: (cards: CardType[]) => ({type: 'SET_CARDS', cards} as const),
    addNewCardsAC: (newWord: string, newTranslate: string, newTheme: string) =>
        ({type: 'ADD_NEW_CARD', payload: {newWord, newTheme, newTranslate}} as const),
}

export default cardsReducer