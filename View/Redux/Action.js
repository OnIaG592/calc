import { types } from "./ActionType"

export const setNumberPayload = (payload) => ({
    type: types.SET_NUMBERS,
    payload
});

export const setAction = (payload) => ({
    type: types.SET_ACTIONS,
    payload
})