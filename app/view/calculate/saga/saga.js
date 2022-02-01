import { put, select, takeEvery } from 'redux-saga/effects'
import { getNumbersAndActions } from '../../../modules/saga/selectors';
import { setAnswers } from '../redux/Action';
import { types } from './actionType'


export function* getAnswerWatcher() {
    yield takeEvery(types.GET_ANSWER, getAnswerWorker)
}

function* getAnswerWorker() {
    let summ = '';
   const number = yield select(getNumbersAndActions)
   for (let i =0; i<number.length; i++) {
     summ += number[i]
   }
   yield put(setAnswers(eval(summ)))
}