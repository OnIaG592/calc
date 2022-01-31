import { types } from "./ActionType"

const initialState = {
    numbersAndActions: [],
    answer: '',
    isFinish: false
}

export const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_NUMBERS:
            return {
                ...state,
                numbersAndActions: [...state.numbersAndActions, action.payload]
            };
        case types.SET_ANSWER:
            return {
                ...state,
                answer: action.payload
            }
            case types.SET_FINISH:
                return {
                    ...state,
                    isFinish: action.payload
                }
                case types.SET_PLUSMINUS:
                    return {
                        ...state,
                        numbersAndActions: action.payload
                    }
        case types.SET_INITIAL: return initialState
        default: return state
    }
}