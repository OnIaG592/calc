import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { calcReducer } from "../../view/calculate/redux/Reducer";
import rootSaga from "../saga";


const rootReducer = combineReducers ({
    calcReducer
});

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)