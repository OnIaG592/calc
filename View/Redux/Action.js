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

export const setFinsih = (payload) => ({
    type: types.SET_FINISH,
    payload
})

export const setPlusMinus = (payload) => ({
    type: types.SET_PLUSMINUS,
    payload
})