import { types } from "./ActionType"

const initialState = {
    numbersAndActions: [],
    answer: ''
}

export const calcReducer = (state = initialState , action) => {
    switch (action.type) {
        case types.SET_NUMBERS: 
        return {
            ...state,
            numbersAndActions: [...state.numbersAndActions,action.payload]
        }
        // case types.SET_ACTIONS: return {
        //     ...state,
        //     actions: [...state.actions, action.payload]
        // }
        default: return state
    }
}