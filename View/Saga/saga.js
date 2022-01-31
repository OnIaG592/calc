import { put, select, takeEvery } from 'redux-saga/effects'
import { setAnswers, setFinsih } from '../Redux/Action';
import { types } from './actionType'


export function* getAnswerWatcher() {
    yield takeEvery(types.GET_ANSWER, getAnswerWorker)
}

function* getAnswerWorker() {
    let summ = '';
   const number = yield select(state => state.calcReducer.numbersAndActions)
   for (let i =0; i<number.length; i++) {
     summ += number[i]
   }
   yield put(setAnswers(eval(summ)))
   yield put(setFinsih(true))
}