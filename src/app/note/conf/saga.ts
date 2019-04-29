import {take,put, call,select} from 'redux-saga/effects'
import * as actionsType from './actionsType';
import * as actions from './actions';
import {fetch} from '../../../utils';

export function* fetchAllNote() {
  while(true) {
    yield take(actionsType.FETCH_ALL_NOTE)
    const {data,status} = yield call(fetch, "GET", ['obj', 'note'])
    yield put(actions.receiveAllNote(data))
  }
}

export function* fetchNote() {
  while(true) {
    const action = yield take(actionsType.FETCH_NOTE)
    console.log("the action", action)
    const {data,status} = yield call(fetch, "GET", ['obj', 'note', action.id])
    yield put(actions.receiveNote(data))
  }
}
