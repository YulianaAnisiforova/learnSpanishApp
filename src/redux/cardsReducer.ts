import {InferActionType} from './store'
import {CardType} from '../types/types'

let initialState = {
    cards: [
        {cardID: 1, cardTheme: 'la familia', cardWord: 'la madre', cardTranslate: 'mother', isFavorite: false},
        {cardID: 2, cardTheme: 'la familia', cardWord: 'el padre', cardTranslate: 'father', isFavorite: false},
        {cardID: 3, cardTheme: 'la familia', cardWord: 'la hermana', cardTranslate: 'sister', isFavorite: false},
        {cardID: 4, cardTheme: 'la familia', cardWord: 'el abuelo', cardTranslate: 'grandfather', isFavorite: false},
        {cardID: 5, cardTheme: 'la casa', cardWord: 'la mesa', cardTranslate: 'table', isFavorite: false},
        {cardID: 6, cardTheme: 'la casa', cardWord: 'la cama', cardTranslate: 'bed', isFavorite: false},
        {cardID: 7, cardTheme: 'el caracter', cardWord: 'bueno', cardTranslate: 'good', isFavorite: false},
        {cardID: 8, cardTheme: 'el caracter', cardWord: 'malo', cardTranslate: 'bad', isFavorite: false},
        {cardID: 9, cardTheme: 'la comida', cardWord: 'la naranja', cardTranslate: 'orange', isFavorite: false},
    ] as CardType[],
    themes: ['la familia', 'la casa', 'el caracter', 'la comida'] as string[],
}

type InitialStateType = typeof initialState
type ActionType = InferActionType<typeof cardsActions>

const cardsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD_NEW_CARD':
            return {
                ...state,
                cards: [...state.cards,
                    {
                        cardID: Math.max(...state.cards.map(card => card.cardID), 0) + 1,
                        cardTheme: action.payload.newTheme,
                        cardTranslate: action.payload.newTranslate,
                        cardWord: action.payload.newWord,
                        isFavorite: false,
                    },],
            }
        case 'ADD_NEW_THEME':
            return {
                ...state,
                themes: [...state.themes, action.newThemeAdd],
            }
        case 'DELETE_WORD':
            return {
                ...state,
                cards: [...state.cards.filter(card => card.cardID !== action.cardID)]
            }
        case 'COPY_LIST': {
            const copyNumber = state.themes.filter(theme =>
                theme.startsWith(`${action.theme} (Copy`)
            ).length + 1
            const copiedTheme = `${action.theme} (Copy ${copyNumber})`

            const originalCards = state.cards.filter(card => card.cardTheme === action.theme);

            const newCards = originalCards.map((card, index) => ({
                ...card,
                cardID: Math.max(...state.cards.map(card => card.cardID), 0) + 1 + index,
                cardTheme: copiedTheme,
                isFavorite: false,
            }))

            return {
                ...state,
                themes: [...state.themes, copiedTheme],
                cards: [...state.cards, ...newCards],
            }
        }
        case 'DELETE_LIST':
            return {
                ...state,
                themes: state.themes.filter(theme => theme !== action.theme),
                cards: state.cards.filter(card => card.cardTheme !== action.theme),
            }
        case 'CHANGE_TITLE':
            return {
                ...state,
                themes: state.themes.map(theme =>
                    theme === action.editingTitle ? action.newTitle : theme
                ),
                cards: state.cards.map(card =>
                    card.cardTheme === action.editingTitle
                        ? { ...card, cardTheme: action.newTitle }
                        : card
                )
            }
        case 'SET_IS_FAVORITE':
            return {
                ...state,
                cards: state.cards.map(card =>
                    card.cardID === action.cardID
                        ? {...card, isFavorite: !card.isFavorite}
                        : card
                )
            }
        default:
            return state
    }
}

export const cardsActions = {
    addNewCardsAC: (newWord: string, newTranslate: string, newTheme: string) =>
        ({type: 'ADD_NEW_CARD', payload: {newWord, newTheme, newTranslate}} as const),
    addNewThemeAC: (newThemeAdd: string) =>
        ({type: 'ADD_NEW_THEME', newThemeAdd} as const),
    deleteWordAC: (cardID: number) =>
        ({type: 'DELETE_WORD', cardID} as const),
    copyListAC: (theme: string) =>
        ({type: 'COPY_LIST', theme} as const),
    deleteListAC: (theme: string) =>
        ({type: 'DELETE_LIST', theme} as const),
    changeTitleAC: (newTitle: string, editingTitle: string | null) =>
        ({type: 'CHANGE_TITLE', newTitle, editingTitle} as const),
    setIsFavoriteAC: (cardID: number) =>
        ({type: 'SET_IS_FAVORITE', cardID} as const),
}

export default cardsReducer