import { take, put, call, fork, select, all } from 'redux-saga/effects'
import {startup} from '../../app/home/conf/saga'
import {submitLogin} from '../../app/login/conf/saga'
import {fetchNote} from '../../app/note/conf/saga'

import axios from 'axios';
import {SEND_REQUEST_AUTH, receiveRequestAuth, sendRequestAuth} from '../actions'

const URL = "http://micky.com/api/hi"
export function sendRequest() {
  return axios({
    method: 'get',
    url: URL,
    withCredentials: true
  })
  .then((data) =>{
    if(data.status == 200) {
      return true
    } 
    return false
  })
  .catch((err) => {
    return false
  })
}

export function* startAuth() {
  // while(true) {
    // yield take(SEND_REQUEST_AUTH)
    yield put(sendRequestAuth())
    const data = yield call(sendRequest)
    yield put(receiveRequestAuth(data))
  // }
}

export function* submitAuth() {
  while(true) {
    yield take(SEND_REQUEST_AUTH)
    yield put(sendRequestAuth())
    const data = yield call(sendRequest)
    yield put(receiveRequestAuth(data))
  }
}


export default function* root() {
  yield all([
    fork(startup),
    fork(startAuth),
    fork(submitAuth),
    fork(submitLogin),
    fork(fetchNote),
  ])
}