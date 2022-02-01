import { types } from "./actionType"

export const calculate = (item) => ({
    type: types.GET_ANSWER,
    item
})