import { put, select, takeEvery } from 'redux-saga/effects'
import { getNumbersAndActions } from '../../../modules/saga/selectors';
import { setAnswers, setInitial, setNumberPayload, setPlusMinus } from '../redux/Action';
import { types } from './actionType'


export function* getAnswerWatcher() {
  yield takeEvery(types.GET_ANSWER, getAnswerWorker)
}

function* getAnswerWorker({item}) {
  const nomre = yield select(getNumbersAndActions)
  if (item == '=') {
    let summ = '';
    const number = yield select(getNumbersAndActions)
    for (let i = 0; i < number.length; i++) {
      summ += number[i]
    }
    yield put(setAnswers(eval(summ)))
  }
  else if (item == 'ac') {
  yield put(setInitial())
  }
  else if (item == '%') {
    alert('Данный функционал пока не работает')
  }
  else if (item == '+/-') {
    let number = [];
    for (let i = 0; i < nomre.length - 1; i++) {
      number[i] = nomre[i]
    }
    number[nomre.length - 1] = (+nomre[nomre.length - 1]) * -1
    console.log('zashel',number);
    yield put(setPlusMinus(number))
  }
  else { 
    if (nomre.length == 0 && item == '.') {
      yield put(setNumberPayload('0' + item))
    }
    else if (nomre.includes('.') && item == '.') {
      yield put(setNumberPayload(item))
    }
    else {
      yield put(setNumberPayload(item))
    }
  }
}