import { types } from "./ActionType"

export const setNumberPayload = (payload) => ({
    type: types.SET_NUMBERS,
    payload
});

export const setAnswers = (payload) => ({
    type: types.SET_ANSWER,
    payload
})

export const setInitial = () => ({
    type: types.SET_INITIAL
})

export const setPlusMinus = (payload) => ({
    type: types.SET_PLUSMINUS,
    payload
})