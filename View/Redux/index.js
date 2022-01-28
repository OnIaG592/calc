import { combineReducers, createStore } from "redux";
import { calcReducer } from "./Reducer";


const rootReducer = combineReducers ({
    calcReducer
});

export const store = createStore(rootReducer)
