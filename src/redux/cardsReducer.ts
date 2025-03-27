import {InferActionType} from './store'

type CardType = {
    cardID: number | null,
    cardTheme: string | null,
    cardText: string | null,
}

let initialState = {
    cards: [
        {cardID: 1, cardTheme: 'la familia', cardText: 'la madre'},
        {cardID: 2, cardTheme: 'la familia', cardText: 'el padre'},
        {cardID: 3, cardTheme: 'la familia', cardText: 'la hermana'},
        {cardID: 4, cardTheme: 'la familia', cardText: 'el abuelo'},
    ] as CardType[],
    newCard: '' as string,
}

type InitialStateType = typeof initialState
type ActionType = InferActionType<typeof actions>

const cardsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ... state,
                ...action.cards,
            }

        case 'ADD_NEW_CARD':
            return {
                ... state,
                cards: [ {cardID: state.cards.length, cardTheme:'', cardText:action.newCard}, ...state.cards],
            }
        default:
            return state
    }
}

export const actions = {
    setCardsAC: (cards: CardType[]) => ({type: 'SET_CARDS', cards} as const),
    addNewCardsAC: (newCard: string) => ({type: 'ADD_NEW_CARD', newCard} as const),
}

export default cardsReducer