import {take,put, call,select} from 'redux-saga/effects'
import * as actionsType from './actionsType';
import * as actions from './actions';
import {fetch} from '../../../utils';

export function* fetchNote() {
  while(true) {
    yield take(actionsType.FETCH_ALL_NOTE)
    const {data,status} = yield call(fetch, "GET", ['obj', 'note'])
    yield put(actions.receiveNote(data))
  }
}
