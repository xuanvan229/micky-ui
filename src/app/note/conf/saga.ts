import {take,put, call,select, fork, all} from 'redux-saga/effects'
import * as actionsType from './actionsType';
import * as actions from './actions';
import {fetch} from '../../../utils';
import {newNote} from './selector';

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
    const {data,status} = yield call(fetch, "GET", ['obj', 'note', action.id])
    yield put(actions.receiveNote(data))
  }
}

export function* sendNewNote() {
  while(true) {
    yield take(actionsType.SUBMIT_NOTE)
    const state = yield select(newNote)
    const noteState = {
      note :{
        ...state.note
      }
    }
    const {data,status} = yield call(fetch, "POST", ['obj', 'note'], noteState)
    if(status == 200) {
      yield put(actions.afterSubmitNoteDone())
    } else {
      yield put(actions.afterSubmitNoteFalse())
    }
  }
}

export function* note() {
  yield all([
    fork(fetchAllNote),
    fork(fetchNote),
    fork(sendNewNote),
  ])
}